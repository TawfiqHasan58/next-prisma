import { Contact } from '@prisma/client';

interface ContactCardProps {
  contact: Contact;
}

export default function ContactCard(props: ContactCardProps) {
  return (
    <div className="border rounded-lg p-4 flex">
      <div className="my-auto">
        <img
          src={props.contact.avatar}
          alt="Avatar"
          style={{width:'40px',
          height:'40px'}}
          className="rounded-full"
        />
      </div>
      <div className="ml-4">
        <p className="text-xl text-gray-700">
          {props.contact.firstName} {props.contact.lastName}
        </p>
        <p className="text-gray-500">{props.contact.email}</p>
      </div>
    </div>
  );
}
