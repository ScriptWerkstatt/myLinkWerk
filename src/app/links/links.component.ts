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
    name:     'myName',
    img:      'profileImg.webp',
    mainLink: 'https://myLinkHere.com'
  };

  cards: LinksCards = [
    {
      txt:  'My Twitch Streams',
      icon: 'bi bi-twitch',
      link: 'https://myLinkHere.com'
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
