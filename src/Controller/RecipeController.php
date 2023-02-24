<?php

namespace App\Controller;

use App\Entity\Recipe;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class RecipeController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/recipe", name="recipe", methods={"POST"})
     */
    public function register(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        $recipe = new Recipe();
        $recipe->setName($data['name']);
        $recipe->setIngredients($data['ingredients']);
        $recipe->setCalories($data['calories']);

        $this->entityManager->persist($recipe);
        $this->entityManager->flush();

        return new Response('Adding new recipe sucessful.', Response::HTTP_OK);
    }
}
