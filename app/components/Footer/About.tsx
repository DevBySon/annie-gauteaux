import Image from "next/image";
import React from "react";
import Container from "../Container";
import { HiOutlinePhoneMissedCall, HiOutlineMail } from 'react-icons/hi';

const MyComponent = () => {
  const title = [
    ['Open time', 'Monday - Friday: 7h30 - 21h30', 'Weekends : 7h30 - 14h'],
    ['Adress', '14 Lê Văn Lương, Trung Hoà, Cầu Giấy, Hà Nội'],
    ['Contact', `cskh@annie.com.vn`, `093.501.6564`],
  ]
  const icons = [
    
  ]
  return (
    <div>
      <Container>
        <div className="flex justify-between mt-16 mb-10">
          <div className="flex flex-col items-center">
            <Image src="/logo.svg" alt={""} width={81} height={91} />
            <span className="font-semibold text-lg">Annie Gâuteaux</span>
          </div>
          {title.map((item, i) => {
            const [firstTitle, ...rest] = item;
            return (
              <div key={i} className="w-64">
                <div className="font-semibold text-lg mb-6">
                  {firstTitle}
                </div>
                {rest.map((item, i) => (
                  <div key={i} className="text-base font-normal mt-2">
                    {firstTitle === 'Contact' && i === 0 && <HiOutlineMail className="inline-block mr-2" />}
                    {firstTitle === 'Contact' && i === 1 && <HiOutlinePhoneMissedCall className="inline-block mr-2" />}
                    {item}
                    </div>
                ))}
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  );
};

export default MyComponent;
