const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
const { model } = require('mongoose');
// @desc Get all contacts
// @routes GET /api/contacts
// @access public

const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find(); 
    res.status(200).json(contacts);
});


// @desc Get individula contacts
// @routes GET /api/contacts/:id
// @access public

const getContact = asyncHandler(async(req, res) => {

    const contact = await Contact.findById(req.params.id);
    if(!contact) { 
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(200).json(contact);
});

// @desc create new contacts
// @routes POST  /api/contacts
// @access public

const createContact = asyncHandler (async(req, res) => {
    console.log("req.body", req.body);
    const {name, email, phone} = req.body;
    if(!name || !phone || !email){
        res.status(400);
        throw new Error("All fields arev mandotary ")
    }

    const contact = await Contact.create({
        name, 
        email,
        phone
    })
    res.status(201).json(contact)
}
)

// @desc Update new contacts
// @routes PUT  /api/contacts
// @access public

const updateContact = asyncHandler (async(req, res) => {

    const contact = await Contact.findById(req.params.id);
    if(!contact) { 
        res.status(404);
        throw new Error("Contact not found")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new : true
        }
    )
    res.json(updateContact)
})


// @desc Delete new contacts
// @routes delete  /api/contacts
// @access public

const deleteContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if(!contact) { 
        res.status(404);
        throw new Error("Contact not found")
    }
    await Contact.remove();
    res.status(200).json(contact)
})


module.exports = {getContacts, getContact, createContact,updateContact, deleteContact}