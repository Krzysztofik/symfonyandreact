<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class LoginController extends AbstractController
{
    public function login(Request $request, AuthenticationUtils $authenticationUtils)
    {
        $data = json_decode($request->getContent(), true);

        $username = $data['username'];
        $password = $data['password'];

        $user = $this->getDoctrine()
            ->getRepository(User::class)
            ->findOneBy(['username' => $username]);

        if (!$user || !$this->get('security.password_encoder')->isPasswordValid($user, $password)) {
            throw $this->createNotFoundException('Invalid username or password');
        }

        // handle successful login, generate JWT token, etc.
    }
}