import { useState } from 'react';
import AuthDropDownOption from './AuthDropDownOption';
import * as Select from '@radix-ui/react-select';
import { DownIcon } from '@components/common/icons/Icons';

interface Props {
  label: string;
  text: string;
  options: SelectOption[];
}

const AuthDropDown = ({ label, text, options }: Props) => {
  // const [isShow, setIsShow] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<string>(text);

  return (
    // <div className="z-10 flex flex-col">
    //   <h2 className="body2 mb-2 text-main1">{label}</h2>
    //   <div
    //     onClick={() => setIsShow(!isShow)}
    //     className={`${
    //       isShow ? 'h-48' : 'h-12'
    //     } relative w-full overflow-hidden rounded-lg border border-solid border-gray3`}>
    //     <AuthDropDownOption
    //       clickHandler={() => {
    //         setIsShow(!isShow);
    //       }}
    //       showDownIcon>
    //       {isSelected}
    //     </AuthDropDownOption>
    //     {isShow && (
    //       <ul className="absolute top-12 z-20 h-36 w-full overflow-auto rounded-b-lg bg-white">
    //         {options.map((option) => (
    //           <li className="h-12 ">
    //             <AuthDropDownOption
    //               clickHandler={() => {
    //                 setIsSelected(option.value);
    //                 setIsShow(!isShow);
    //               }}>
    //               {option.value}
    //             </AuthDropDownOption>
    //           </li>
    //         ))}
    //       </ul>
    //     )}
    //   </div>
    // </div>

    <Select.Root onValueChange={() => setIsSelected('dd')}>
      <Select.Trigger className="data-[placeholder]:body5 relative flex h-12 items-center justify-center rounded-lg border border-solid border-gray3 bg-white hover:bg-gray1 data-[state=open]:rounded-b-none data-[placeholder]:text-gray4">
        <Select.Value className="body5 text-gray6" placeholder={text} />
        <Select.Icon className="absolute right-[10px] top-4">
          <DownIcon size={20} color="#888888" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position={'popper'}
          collisionPadding={0}
          // avoidCollisions={isSelected ? false : true}
          className="h-36 overflow-hidden rounded-b-lg border-x border-b border-solid border-gray3 bg-white">
          <Select.Viewport>
            {options.map((option) => (
              <AuthDropDownOption value={option.value}>
                {option.value}
              </AuthDropDownOption>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default AuthDropDown;

{
  /* <Select.Root>
<Select.Trigger
  className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
  aria-label="Food"
>
  <Select.Value placeholder="Select a fruit…" />
  <Select.Icon className="text-violet11">
    <ChevronDownIcon />
  </Select.Icon>
</Select.Trigger>
<Select.Portal>
  <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
    <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
      <ChevronUpIcon />
    </Select.ScrollUpButton>
    <Select.Viewport className="p-[5px]">
      <Select.Group>
        <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
          Fruits
        </Select.Label>
        <AuthDropDownOption value="apple">Apple</AuthDropDownOption>
        <AuthDropDownOption value="banana">Banana</AuthDropDownOption>
        <AuthDropDownOption value="blueberry">Blueberry</AuthDropDownOption>
        <AuthDropDownOption value="grapes">Grapes</AuthDropDownOption>
        <AuthDropDownOption value="pineapple">Pineapple</AuthDropDownOption>
      </Select.Group>

      <Select.Separator className="h-[1px] bg-violet6 m-[5px]" />

      <Select.Group>
        <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
          Vegetables
        </Select.Label>
        <AuthDropDownOption value="aubergine">Aubergine</AuthDropDownOption>
        <AuthDropDownOption value="broccoli">Broccoli</AuthDropDownOption>
        <AuthDropDownOption value="carrot" disabled>
          Carrot
        </AuthDropDownOption>
        <AuthDropDownOption value="courgette">Courgette</AuthDropDownOption>
        <AuthDropDownOption value="leek">Leek</AuthDropDownOption>
      </Select.Group>

      <Select.Separator className="h-[1px] bg-violet6 m-[5px]" />

      <Select.Group>
        <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
          Meat
        </Select.Label>
        <AuthDropDownOption value="beef">Beef</AuthDropDownOption>
        <AuthDropDownOption value="chicken">Chicken</AuthDropDownOption>
        <AuthDropDownOption value="lamb">Lamb</AuthDropDownOption>
        <AuthDropDownOption value="pork">Pork</AuthDropDownOption>
      </Select.Group>
    </Select.Viewport>
    <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
      <ChevronDownIcon />
    </Select.ScrollDownButton>
  </Select.Content>
</Select.Portal>
</Select.Root> */
}
