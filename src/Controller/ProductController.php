<?php

namespace App\Controller;

use App\Entity\Product;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;

class ProductController extends AbstractController
{
    /**
     * @Route("/api/products", name="api_products")
     */
    public function index(EntityManagerInterface $entityManager): Response
    {
        $products = $entityManager->getRepository(Product::class)->findAll();

        $data = [];

        foreach ($products as $product) {
            $data[] = [
                'id' => $product->getId(),
                'name' => $product->getName(),
                'calories' => $product->getCalories(),
                'protein' => $product->getProtein(),
                'carbohydrates' => $product->getCarbohydrates(),
                'fat' => $product->getFat(),
            ];
        }

        return $this->json($data);
    }
}