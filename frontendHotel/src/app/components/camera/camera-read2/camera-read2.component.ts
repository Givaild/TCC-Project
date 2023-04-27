import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CameraRead2DataSource} from './camera-read2-datasource';
import { Camera } from '../camera.model';

@Component({
  selector: 'app-camera-read2',
  templateUrl: './camera-read2.component.html',
  styleUrls: ['./camera-read2.component.css']
})
export class CameraRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Camera>;
  dataSource: CameraRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'cameras'];

  constructor() {
    this.dataSource = new CameraRead2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
