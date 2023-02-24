<?php

namespace App\Controller;

use App\Entity\Blog;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;

class BlogController extends AbstractController
{
    /**
     * @Route("/api/blogs", name="api_blogs")
     */
    public function index(EntityManagerInterface $entityManager): Response
    {
        $blogs = $entityManager->getRepository(Blog::class)->findAll();

        $data = [];

        foreach ($blogs as $blog) {
            $data[] = [
                'id' => $blog->getId(),
                'title' => $blog->getTitle(),
                'description' => $blog->getDescription(),
            ];
        }

        return $this->json($data);
    }
}