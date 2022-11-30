<?php

namespace App\Interfaces;

interface ContactInterface
{
    public function getAllContacts();
    public function createContact($request);
    public function getContactById($contactId);
    public function updateContact($request, $contactId);
    public function deleteContact($contactId);
}