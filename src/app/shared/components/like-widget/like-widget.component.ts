import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

/**
 * Represents a like button widget component.
 */
@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss']
})
export class LikeWidgetComponent implements OnInit {

  /**
   * An event emitter that emits an event when the like button is clicked.
   */
  @Output() public liked = new EventEmitter<void>();

  /**
   * The number of likes for the widget.
   */
  @Input() public likes = 0;

  /**
   * The unique ID of the widget. If no ID is provided, it is generated using the `UniqueIdService`.
   */
  @Input() public id: string = null;

  /**
   * An object that contains the FontAwesome icon for the thumbs-up symbol.
   */
  public fonts = { faThumbsUp };

  constructor(private uniqueIdService: UniqueIdService) { }

  /**
   * Initializes the component. If no ID is provided, it generates a unique ID using the `UniqueIdService` and assigns it to the `id` field.
   */
  ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueIdService.generatedUniqueIdWithPrefix('like-widget');
    }
  }

  /**
   * Called when the like button is clicked. Emits the `liked` event.
   */
  like(): void {
    this.liked.emit();
  }
}
