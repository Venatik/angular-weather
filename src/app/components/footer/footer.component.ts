import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTooltipModule } from "@angular/material/tooltip";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {
  contacts = [
    {
      img: "assets/linkedin2.png",
      link: "https://www.linkedin.com/in/stefan-trajkovski-b00662b5/",
      tooltip: "Take me to Stefan's LinkedIn profile",
      alt: "LinkedIn Icon",
    },
    {
      img: "assets/github.png",
      link: "https://github.com/Venatik",
      tooltip: "Take me to Stefan's Github profile",
      alt: "GitHub Icon",
    },
  ];
}
