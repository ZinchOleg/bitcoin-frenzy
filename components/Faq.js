import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "Mein Handy hat ein Schutzglas und ein Schutzhülle liegt der Bestellung bei. Bin ich verpflichtet die Schutzhülle und das Schutzglas zu verwenden?",
    answer:"Ihre Firma übernimmt einen Teile des monatlichen Abo Betrages. Falls Wunschhandys zur Verfügung gestellt werden, können Sie  Ihr persönliches Wunschhandy bestellen und zahlen dann nur die Differenz zu dem Betrag den Ihre Firme übernimmt. Dieser Betrag wird von Ihrer Firma mit Ihnen abgerechnet. Für genauere Informationen, fragen Sie bitte direkt Ihren Arbeitgeber.",
  },
  {
    question: "Was soll ich tun wenn mein das Schutzglas/Schutzhülle defekt ist?",
    answer:"Ihre Firma übernimmt einen Teile des monatlichen Abo Betrages. Falls Wunschhandys zur Verfügung gestellt werden, können Sie  Ihr persönliches Wunschhandy bestellen und zahlen dann nur die Differenz zu dem Betrag den Ihre Firme übernimmt. Dieser Betrag wird von Ihrer Firma mit Ihnen abgerechnet. Für genauere Informationen, fragen Sie bitte direkt Ihren Arbeitgeber.",
  },
  {
    question: "Beim Preis steht ein Betrag, der von meiner Gehaltsabrechnung monatlich abgezogen wird. Was bedeutet das?",
    answer:"Ihre Firma übernimmt einen Teile des monatlichen Abo Betrages. Falls Wunschhandys zur Verfügung gestellt werden, können Sie  Ihr persönliches Wunschhandy bestellen und zahlen dann nur die Differenz zu dem Betrag den Ihre Firme übernimmt. Dieser Betrag wird von Ihrer Firma mit Ihnen abgerechnet. Für genauere Informationen, fragen Sie bitte direkt Ihren Arbeitgeber.",
  },
  {
    question: "Kann ich mich auch zu Fragen, die mit der Bedienung des Gerätes zu tun haben, an Teleservice wenden?",
    answer:"Ihre Firma übernimmt einen Teile des monatlichen Abo Betrages. Falls Wunschhandys zur Verfügung gestellt werden, können Sie  Ihr persönliches Wunschhandy bestellen und zahlen dann nur die Differenz zu dem Betrag den Ihre Firme übernimmt. Dieser Betrag wird von Ihrer Firma mit Ihnen abgerechnet. Für genauere Informationen, fragen Sie bitte direkt Ihren Arbeitgeber.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Faq() {
  return (
    <div className="bg-white drop-shadow-md">
      <div className=" mx-auto py-6 px-4 sm:py-6 sm:px-6 lg:px-8">
        <div className=" mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-xl tracking-tight font-bold text-gray-900  sm:tracking-tight">
            Questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12 flex flex-col gap-y-2">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                      <bytton type='button' className='px-3 py-2 w-36 text-center text-sm font-bold self-end text-[#E3831D] border border-[#E3831D] cursor-pointer'>
                        Open Ticket
                      </bytton>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}