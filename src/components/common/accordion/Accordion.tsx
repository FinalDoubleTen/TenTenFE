import * as accordion from '@radix-ui/react-accordion';
import { CheckIcon } from '../icons/Icons';

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  return (
    <accordion.Root type="single" collapsible>
      <accordion.Item value="item-1">
        <accordion.Header className="flex">
          {title}
          <accordion.Trigger className="ml-auto">
            <CheckIcon size={17} className="rotate-on-open" />
          </accordion.Trigger>
        </accordion.Header>
        <accordion.Content>{content}</accordion.Content>
      </accordion.Item>
    </accordion.Root>
  );
};

export default Accordion;
