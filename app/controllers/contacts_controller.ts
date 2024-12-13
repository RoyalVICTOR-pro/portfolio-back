import type { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'
import { createContactValidator } from '#validators/contact'
import Contact from '#models/contact'

export default class ContactsController {
  async store({ request, response }: HttpContext) {
    try {
      const validatedData = await request.validateUsing(createContactValidator)

      await Contact.create(validatedData)

      await mail.send((message) => {
        message
          .from('royal.victor.pro@gmail.com')
          .to('royal.victor.pro@gmail.com')
          .subject('New contact message')
          .htmlView('emails/contact', validatedData)
      })

      return response.status(201).send({
        status: 'success',
        message: 'Contact message sent successfully',
      })
    } catch (error) {
      // Dans AdonisJS 6, les erreurs de validation sont gérées automatiquement
      // et renvoient une structure d'erreur spécifique
      if (error.status === 422) {
        return response.status(422).send({
          status: 'error',
          type: 'validation',
          errors: error.messages, // VineJS fournit déjà les messages formatés
        })
      }

      console.error('Contact creation error:', error)
      return response.status(500).send({
        status: 'error',
        type: 'server',
        message: 'An error occurred while processing your request',
      })
    }
  }
}
