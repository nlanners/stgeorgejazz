import { ProfileCard } from './ProfileCard';
import { admin, board } from './profiles';

export const AboutPage = () => (
  <div className="flex flex-col gap-20">
    <div id="info" className="flex flex-col gap-10">
      <div id="mission" className="">
        <h1 className="font-header text-5xl text-accent mb-8">Our mission</h1>
        <h3 className="font-header text-4xl">
          TO PRESERVE, PERPETUATE, AND FOSTER APPRECIATION FOR JAZZ MUSIC
          THROUGH PROVIDING CONCERTS, FESTIVALS, AND EDUCATIONAL OPPORTUNITIES
          IN SOUTHERN UTAH AND ITS SURROUNDING AREAS.
        </h3>
      </div>
      <div id="story">
        <h1 className="font-header text-5xl text-accent-light mb-8">
          Our story
        </h1>
        <p className="font-body text-xl font-base">
          St George Jazz is in it’s first year of operation as it’s own 501c3.
          Before this year we were a DBA under the non-profit A.R.T.S. Inc.{' '}
          <br />
          <br />
          The St George Jazz Festival has been our main event since we started
          in 2017. We continue to organize it every February by bringing in
          guest artists from around the country. You can find more info about
          the St George Jazz Festival{' '}
          <a
            href="https://stgeorgejazzfest.com"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            here.
          </a>
          <br />
          <br /> As we grow and expand we plan to be a hub for jazz events right
          here in St George, Utah. Right now we work with the Rebel Jazz Band to
          bring Jazz performances to the community.
        </p>
      </div>
    </div>
    <div id="admin">
      <h1 className="font-header text-5xl mb-20">Administration</h1>
      <div className="flex gap-16">
        {admin.map(profile => (
          <ProfileCard
            key={profile.title}
            description={profile.description}
            title={profile.title}
            image={profile.image}
            link={profile.link}
            linkName={profile.linkName}
          />
        ))}
      </div>
    </div>
    <div id="board">
      <h1 className="font-header text-4xl mb-10">Board Members</h1>
      <div className="flex flex-wrap">
        {board.map(profile => (
          <ProfileCard
            key={profile.title}
            description={profile.description}
            title={profile.title}
            image={profile.image}
            link={profile.link}
            linkName={profile.linkName}
          />
        ))}
      </div>
    </div>
  </div>
);
