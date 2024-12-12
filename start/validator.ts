import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
  // Applicable for all fields
  'required': 'The {{ field }} field is required',
  'string': 'The value of {{ field }} field must be a string',
  'email': 'The value is not a valid email address',

  // Error message for the username field
  'name.required': 'Le champ nom/prénom est obligatoire',
  'name.string': 'Le champ nom/prénom doit être une chaîne de caractères',
  'name.minLength': 'Le champ nom/prénom doit contenir au moins {{ min }} caractères',
  'email.email': 'Le champ email doit être une adresse email valide',
  'email.required': 'Le champ email est obligatoire',
  'phone.string': 'Le champ téléphone doit être un numéro de téléphone valide',
  'message.minLength': 'Le champ message doit contenir au moins {{ min }} caractères',
  'message.required': 'Le champ message est obligatoire',
})
