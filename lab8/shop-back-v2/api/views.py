import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from .models import Product, Category


def product_to_dict(product):
    return {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'image': product.image,        # ← add
        'images': product.images,      # ← add
        'link': product.link,          # ← add
        'rating': product.rating,      # ← add
        'category': {
            'id': product.category.id,
            'name': product.category.name,
        }
    }


def category_to_dict(category):
    return {
        'id': category.id,
        'name': category.name,
    }


# ─── PRODUCTS ────────────────────────────────────────────────────────────────

@csrf_exempt
@require_http_methods(['GET', 'POST'])
def products_list(request):
    if request.method == 'GET':
        products = Product.objects.select_related('category').all()
        return JsonResponse([product_to_dict(p) for p in products], safe=False)

    try:
        body = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)

    required = ['name', 'price', 'description', 'count', 'category_id']
    missing = [f for f in required if f not in body]
    if missing:
        return JsonResponse({'error': f'Missing fields: {", ".join(missing)}'}, status=400)

    try:
        category = Category.objects.get(pk=body['category_id'])
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

    product = Product.objects.create(
        name=body['name'],
        price=body['price'],
        description=body['description'],
        count=body['count'],
        is_active=body.get('is_active', True),
        category=category,
    )
    return JsonResponse(product_to_dict(product), status=201)


@csrf_exempt
@require_http_methods(['GET', 'PUT', 'DELETE'])
def product_detail(request, id):
    try:
        product = Product.objects.select_related('category').get(pk=id)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

    if request.method == 'GET':
        return JsonResponse(product_to_dict(product))

    if request.method == 'DELETE':
        product.delete()
        return JsonResponse({'message': f'Product {id} deleted'}, status=200)

    try:
        body = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)

    if 'category_id' in body:
        try:
            product.category = Category.objects.get(pk=body['category_id'])
        except Category.DoesNotExist:
            return JsonResponse({'error': 'Category not found'}, status=404)

    for field in ['name', 'price', 'description', 'count', 'is_active']:
        if field in body:
            setattr(product, field, body[field])

    product.save()
    return JsonResponse(product_to_dict(product))


# ─── CATEGORIES ──────────────────────────────────────────────────────────────

@csrf_exempt
@require_http_methods(['GET', 'POST'])
def categories_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        return JsonResponse([category_to_dict(c) for c in categories], safe=False)

    try:
        body = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)

    if 'name' not in body:
        return JsonResponse({'error': 'Missing field: name'}, status=400)

    category = Category.objects.create(name=body['name'])
    return JsonResponse(category_to_dict(category), status=201)


@csrf_exempt
@require_http_methods(['GET', 'PUT', 'DELETE'])
def category_detail(request, id):
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

    if request.method == 'GET':
        return JsonResponse(category_to_dict(category))

    if request.method == 'DELETE':
        category.delete()
        return JsonResponse({'message': f'Category {id} deleted'}, status=200)

    try:
        body = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)

    if 'name' not in body:
        return JsonResponse({'error': 'Missing field: name'}, status=400)

    category.name = body['name']
    category.save()
    return JsonResponse(category_to_dict(category))


@require_http_methods(['GET'])
def category_products(request, id):
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

    products = Product.objects.select_related('category').filter(category=category)
    return JsonResponse([product_to_dict(p) for p in products], safe=False)
