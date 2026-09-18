import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="w-full container mx-auto">
      <div className="bg-text-navy p-10 rounded-t-4xl relative">
        {/* IMG BG */}
        <img
          className="absolute top-0 right-0"
          src="/public/footer/footer-top-right-wave.svg"
          alt="footer-top-right-wave"
        />
        {/* 1 ROW */}
        <div className="border-b border-t border-text-muted flex justify-around items-center max-lg:flex-wrap">
          <div className="flex  p-5 max-lg:min-w-72">
            <img src="/public/footer/service-delivery.svg" alt="delivery" />
            <div className="ms-5">
              <p className="text-surface">Spedizione gratuita</p>
              <p className="text-text-soft">per ordini superiori a €49</p>
            </div>
          </div>
          <div className="border-s-2 border-text-muted h-15"></div>
          <div className="flex  p-5 max-lg:min-w-72">
            <img src="/public/footer/service-return.svg" alt="return" />
            <div className="ms-5">
              <p className="text-surface">Reso facile</p>
              <p className="text-text-soft">entro 30 giorni</p>
            </div>
          </div>
          <div className="border-s-2 border-text-muted h-15"></div>
          <div className="flex  p-5 max-lg:min-w-72">
            <img src="/public/footer/service-payment.svg" alt="payment" />
            <div className="ms-5">
              <p className="text-surface">Pagamneti sicuri</p>
              <p className="text-text-soft">protetti e verificati</p>
            </div>
          </div>
          <div className="border-s-2 border-text-muted h-15"></div>
          <div className="flex  p-5 max-lg:min-w-72">
            <img src="/public/footer/service-support.svg" alt="support" />
            <div className="ms-5">
              <p className="text-surface">Assistenza dedicata</p>
              <p className="text-text-soft">sempre al tuo fianco</p>
            </div>
          </div>
          <div className="border-s-2 border-text-muted h-15"></div>
        </div>
        {/* 2 ROW */}
        <div className="border-b border-t py-7 border-text-muted flex justify-around items-center max-xl:flex-wrap">
          <div className="p-5 max-xl:w-full max-xl:text-center">
            <img
              className="w-50"
              src="/public/logo/logo-bianco-per-sfondi-scuri.svg"
              alt="logo"
            />
            <p className="text-surface">
              Tecnologia per rendere più semplice ogni giorno
            </p>
          </div>
          <div className="border-s-2 border-text-muted h-25"></div>
          <div className="text-surface text-center">
            <p className="font-semibold uppercase">esplora</p>
            <ul>
              <li className="hover:text-cyan-accent">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:text-cyan-accent">
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li className="hover:text-cyan-accent">
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          <div className="border-s-2 border-text-muted h-25"></div>
          <div className="flex flex-col gap-3 max-md:w-full max-md:mt-5">
            <h3 className="uppercase font-semibold text-cyan-accent mt-5">
              novità, offerte, ispirazioni
            </h3>
            <h2 className="text-surface">Resta connesso al futuro.</h2>
            <p className="text-text-muted">
              Iscriviti alla newsletter TechNova.
            </p>
            <div className="p-2 flex items-center justify-center bg-surface rounded-2xl">
              <input
                type="email"
                name="emailNews"
                id="emailNews"
                placeholder="La tua email"
                className="me-4"
              />
              <Button>Iscriviti</Button>
            </div>
          </div>
        </div>
        {/* 3 ROW */}
        <div className=" pt-7  flex justify-around items-center text-text-muted text-sm">
          <p className="flex-1/3 text-center">
            © 2026 TechNova S.r.l. · P. IVA 01234567890
          </p>
          <ul className="flex-1/3 flex justify-around">
            <li>Privacy</li>
            <li>Cookie</li>
            <li>Termini di servizio</li>
            <li>Accessibilità</li>
          </ul>
          <div className="flex-1/3 flex justify-center">
            <img src="/public/footer/payment-icons.svg" alt="payment" />
          </div>
        </div>
      </div>
    </footer>
  );
}
