<?php

namespace App\Repositories;

use App\Interfaces\ContactInterface;
use App\Models\Test;

class ContactRepository implements ContactInterface
{

    /**
     * Function : Get All Contacts
     * @param NA
     * @return posts
     */
    public function getAllContacts()
    {
        return Test::select('name', 'print_name')->get();
    }

    /**
     * Function : Create Contact
     *
     * @param [type] $request
     * @return contact
     */
    public function createContact($request)
    {
        return Test::create([
            'name' => $request->companyName,
            'print_name' => $request->printName,
            'date' => $request->date
        ]);
    }

    /**
     * Function : Get Contact By Id
     * @param [type] $id
     * @return contact
     */
    public function getContactById($id)
    {
        return Test::find($id);
    }

    /**
     * Function : Update Contact
     *
     * @param [type] $request
     * @param [type] $id
     * @return contact
     */
    public function updateContact($request, $id)
    {
        $contact = Test::find($id);
        if ($contact) {
            $contact['companyName'] = $request->companyName;
            $contact['printName'] = $request->printName;
            $contact['date'] = $request->date;
            $contact->save();
            return $contact;
        }
    }

    /**
     * Function : Delete Contact
     * @param [type] $id
     * @return void
     */
    public function deleteContact($id)
    {
        $contact = Test::find($id);
        if ($contact) {
            return $contact->delete();
        }
    }
}