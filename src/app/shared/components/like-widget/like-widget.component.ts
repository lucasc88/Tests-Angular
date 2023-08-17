import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss']
})
export class LikeWidgetComponent implements OnInit {

  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = null;
  public fonts = { faThumbsUp };

  constructor(private uniqueIdService: UniqueIdService) { }

  ngOnInit(): void {
    if (!this.id) {
      this.uniqueIdService.generatedUniqueIdWithPrefix('like-widget');
    }
  }

  //When cliked on Like, it's emmitted this event to the parent component
  like(): void{
    this.liked.emit();
  }
}
