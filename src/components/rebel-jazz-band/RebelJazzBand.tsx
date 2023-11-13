import { ContactForm } from '../ContactForm';

export const RebelJazzBand = () => (
  <div>
    <div className="mx-auto w-7/12 mb-96">
      <h1 className="font-header text-6xl text-accent-light">
        Loved by old and young,
      </h1>
      <p className="font-header text-5xl whitespace-pre-wrap">
        THE BIG BAND SOUND IS AN AMERICAN ORIGINAL. BIG BAND BRIDGES THE
        GENERATION GAP, WHICH IS NOT EASY TO DO WITH OTHER MUSICAL GENRES. A BIG
        BAND DANCE CAN BE PROMOTED TO ALL AGES AS THE PERFECT PRIVATE OR
        COMMUNITY EVENT.
        <br />
        <br />
        THE REBEL JAZZ BAND (RJB) EXISTS TO PRESERVE AND PROMOTE THE CLASSICAL
        SOUNDS OF 20TH CENTURY JAZZ AND SWING, TO ADAPT THE BIG BAND SOUNDS TO
        THE TRENDS OF TODAY, AND TO PROVIDE TOP LOCALMUSICIANS A VENUE TO SHARE
        THEIR TALENTS WITH THE COMMUNITY.
      </p>
    </div>
    <ContactForm type="rjb" />
  </div>
);
