import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import {SiNextdotjs, SiTailwindcss, SiReact, SiNodedotjs, SiExpress, SiGithub, SiLinkedin} from 'react-icons/si'
import {CgProfile} from 'react-icons/cg'



export default function Home() {

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/business' },
  ]

  return (<>
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        
          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/">
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="/economy.png"
                        alt='Logo'
                      />
                    </Link>
                    <div className="mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <button className="font-medium text-gray-500 hover:text-gray-900">{item.name}</button>
                    </Link>
                  ))}
                  <Link href="/login">
                    <button className="font-medium text-emerald-600 hover:text-emerald-500">Login</button>
                  </Link>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/economy.png"
                        alt=""
                      />
                    </div>
                    <div className="mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        
                      >
                        <button className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{item.name}</button>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/login"
                    
                  >
                    <button className="block w-full px-5 py-3 text-center font-medium text-emerald-600 bg-gray-50 hover:bg-gray-100">Login</button>
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Controle o seu</span>{' '}
                <span className="block text-emerald-600 xl:inline">estoque</span> {' '}
                <span className="block xl:inline">com </span>{' '} <p className="block text-emerald-600 xl:inline">Kols</p> 
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Kols é uma plataforma de gerenciamento para o seu negócio. Crie diferentes empresas e administre seus empreendimentos em um só lugar.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/signup"
                  >
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10">Crie sua conta agora mesmo</button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img 
      src='/bg-home.jpg' 
      width='1080' 
      height='1080' 
      className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"/>
      </div>
      </div>
       <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            <div className="">
              <h6 className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          ">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes"
                  className="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z">
                  </path>
                </svg>
                Projeto III - Ironhack WebDEV
              </h6>
              <p className='mb-2'>
                Kols é um projeto elaborado por João Vítor Ferraz, Karen Okasaki e Leonardo Santini para conclusão do bootcamp em Web Development.
              </p>

              <h6 className='font-semibold mb-3'>Powered by:</h6>
              <div className="">
              <h6 className="
            
            mb-1
            flex
            items-center
            justify-center
            md:justify-start
          ">
                <SiNextdotjs className='mr-1'/><SiReact/><span className='ml-3'>Next.js</span>
              </h6>
              <h6 className="
            
            mb-1
            flex
            items-center
            justify-center
            md:justify-start
          ">
                <SiExpress className='mr-1'/><SiNodedotjs/><span className='ml-3'>Express</span>
              </h6>
              <h6 className="
            
            mb-1
            flex
            items-center
            justify-center
            md:justify-start
          ">
                <SiTailwindcss className='ml-2'/>
            <span className='ml-6'>Tailwind CSS / React Icons</span>
              </h6>
              </div>
            </div>              
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Contact
              </h6>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <CgProfile/>
                <span className='ml-4 font-semibold'>João Vítor Ferraz</span>
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                  className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                  </path>
                </svg>
                Florianópolis
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                  className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                  </path>
                </svg>
                jvkferraz@gmail.com
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
              <SiGithub/>
              <a href='https://github.com/jotavkf'><span className='ml-4'>Meu GitHub</span></a>
              </p>
              <p className="flex items-center justify-center md:justify-start">
              <SiLinkedin/>
              <a href='https://github.com/jotavkf'><span className='ml-4'>Meu LinkedIn</span></a>
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Contact
              </h6>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <CgProfile/>
                <span className='ml-4 font-semibold'>Karen Okasaki</span>
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                  className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                  </path>
                </svg>
                Ribas do Rio Pardo
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                  className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                  </path>
                </svg>
                oks.karen@gmail.com
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
              <SiGithub/>
              <a href='https://github.com/karenokasaki'><span className='ml-4'>Meu GitHub</span></a>
              </p>
              <p className="flex items-center justify-center md:justify-start">
              <SiLinkedin/>
              <a href='https://www.linkedin.com/in/karen-okasaki/'><span className='ml-4'>Meu LinkedIn</span></a>
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Contact
              </h6>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <CgProfile/>
                <span className='ml-4 font-semibold'>Leonardo Santini</span>
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                  className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                  </path>
                </svg>
                São José dos Campos
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                  className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                  </path>
                </svg>
                leonardo.santini@outlook.com.br 
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
              <SiGithub/>
              <a href='https://github.com/LeoSantini'><span className='ml-4'>Meu GitHub</span></a>
              </p>
              <p className="flex items-center justify-center md:justify-start">
              <SiLinkedin/>
              <a href='https://www.linkedin.com/in/leo-santini/'><span className='ml-4'>Meu LinkedIn</span></a>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center p-6 bg-gray-200">
          <span>© 2022:</span>
          <a className="text-gray-600 font-semibold" href="https://github.com/jotavkf/kols-client/"> Projeto no Github</a>
        </div>
      </footer>
    </>
  )
}