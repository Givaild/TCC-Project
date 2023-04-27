import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Camera } from '../camera.model';




// TODO: replace this with real data from your application
const EXAMPLE_DATA: Camera[] = [
  {id: 1, camera: 'Hydrogen'},
  {id: 2, camera: 'Helium'},
  {id: 3, camera: 'Lithium'},
  {id: 4, camera: 'Beryllium'},
  {id: 5, camera: 'Boron'},
  {id: 6, camera: 'Carbon'},
  {id: 7, camera: 'Nitrogen'},
  {id: 8, camera: 'Oxygen'},
  {id: 9, camera: 'Fluorine'},
  {id: 10, camera: 'Neon'},
  {id: 11, camera: 'Sodium'},
  {id: 12, camera: 'Magnesium'},
  {id: 13, camera: 'Aluminum'},
  {id: 14, camera: 'Silicon'},
  {id: 15, camera: 'Phosphorus'},
  {id: 16, camera: 'Sulfur'},
  {id: 17, camera: 'Chlorine'},
  {id: 18, camera: 'Argon'},
  {id: 19, camera: 'Potassium'},
  {id: 20, camera: 'Calcium'},
];

/**
 * Data source for the CameraRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CameraRead2DataSource extends DataSource<Camera> {
  data: Camera[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Camera[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Camera[]): Camera[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Camera[]): Camera[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.camera, b.camera, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
