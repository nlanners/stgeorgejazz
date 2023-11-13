export const ContactForm = ({ type }: { type: 'rjb' | 'sgj' }) => {
  return (
    <div className="flex gap-12">
      <div id="contact-right-side">
        <p className="font-body text-xl">
          {type === 'rjb'
            ? 'Would you like to schedule the RJB for a public or private gig?'
            : 'For questions or booking opportunities,'}
        </p>
        <h4 className="font-header text-accent text-3xl">Contact us</h4>
      </div>
      <form id="contact-form" className="font-body text-lg flex flex-col w-1/2">
        <label className="text-2xl" htmlFor="first-name">
          Name
        </label>
        <div className="flex gap-8">
          <input
            name="first-name"
            id="first-name"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            name="last-name"
            id="last-name"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <label className="text-2xl" htmlFor="email">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          required
        />
        <label className="text-2xl" htmlFor="message">
          Message
        </label>
        <textarea name="message" id="message" rows={5} placeholder="Message" />
        <a className="button text-xl">Send</a>
      </form>
    </div>
  );
};
