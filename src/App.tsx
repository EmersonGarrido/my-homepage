import React from "react";

const contactList = [
  {
    platform: "Whatsapp",
    url: "https://wa.me/5567993109148?text=Ola, tudo bem? vim pelo seu site.",
    icon: "whatsapp",
    disabled: false,
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/oemersongarrido/",
    icon: "facebook",
    disabled: false,
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/emersongarrido.dev",
    icon: "instagram",
    disabled: false,
  },
  {
    platform: "Linkedin",
    url: "https://www.linkedin.com/in/emersongarrido/",
    icon: "linkedin",
    disabled: false,
  },
  {
    platform: "Github",
    url: "https://github.com/EmersonGarrido",
    icon: "github",
    disabled: false,
  },
  {
    platform: "Blog pessoal",
    url: "https://blog.emersongarrido.com.br",
    icon: "blog",
    disabled: false,
  },
];

const App: React.FC = () => {
  return (
    <div className="p-4 flex items-center justify-center flex-col">
      <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
        <img
          src="/assets/avatar.jpeg"
          className="w-[150px] h-[150px] rounded-full border-[#F1F5F7] border-[0.2rem]"
        />
      </div>
      <div className="text-center mt-2">
        <h1 className="font-bold text-[22px]">Emerson Garrido</h1>
        <span className="font-thin text-[16px]">@emersongarrido.dev</span>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-5 gap-5 max-w-[400px]">
        {contactList.map((contact, index) => {
          return (
            <div
              onClick={() => {
                if (!contact.disabled) {
                  window.open(`${contact.url}`);
                }
              }}
              className="border-[0.1rem] flex gap-3 items-center rounded-md p-3 w-full cursor-pointer bg-black/5 hover:bg-black/10 shadow-sm"
            >
              <img
                src={`/assets/${contact.icon}.png`}
                className="w-[30px] h-[30px]"
              />
              <div className="flex items-center justify-between w-full">
                <div>{contact.platform}</div>
                {contact.disabled && (
                  <div className="text-black font-thin text-[12px] ">
                    Em breve
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-5 text-[12px]">
        Todos os direitos reservados a vocês que estão lendo isso. <br />
      </div>
      <span className="font-thin text-[12px]">
        Este projeto esta open-source no meu GitHub.
      </span>
    </div>
  );
};

export default App;
