<?php

namespace App\Controller;

use App\Entity\Recipe;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;

class RecipeController extends AbstractController
{
    /**
     * @Route("/api/recipes", name="api_recipes")
     */
    public function index(EntityManagerInterface $entityManager): Response
    {
        $recipes = $entityManager->getRepository(Recipe::class)->findAll();

        $data = [];

        foreach ($recipes as $recipe) {
            $data[] = [
                'id' => $recipe->getId(),
                'name' => $recipe->getName(),
                'ingredients' => $recipe->getIngredients(),
                'calories' => $recipe->getCalories(),
            ];
        }

        return $this->json($data);
    }
}