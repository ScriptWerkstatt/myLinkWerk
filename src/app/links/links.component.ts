import { Component } from '@angular/core';

interface UserModel {
  name:     string,
  img:      string,
  mainLink: string
};
interface LinksCard {
  txt:  string,
  icon: string,
  link: string,
};
interface LinksCards extends Array<LinksCard> {};

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {

  userModel: UserModel = {
    name:     'myName',                 // Your name
    img:      'profileImg.webp',        // Your profile image pathe inside "/assets/img/<HERE>"
    mainLink: 'https://myLinkHere.com'  // The main link for your profile (for example your website or important profile)
  };

  cards: LinksCards = [
    {
      txt:  'My Twitch Streams',      // Card text the user sees
      icon: 'bi bi-twitch',           // Card icon before the text
      link: 'https://myLinkHere.com'  // Card link the user navigates on click
    },
    {
      txt:  'ScriptWerk Github Projects',
      icon: 'bi bi-github',
      link: 'https://github.com/ScriptWerkstatt/myLinkWerk'
    }
  ];

  /**
   * @method navigates to a url
   * @param {string} url the url as a string
   * @author Flowtastisch
   * @memberof ScriptWerk
   */
  onNavigateToURL (url: string) {
    document.location.href = url;
  }
}
