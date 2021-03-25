import { Content } from '@angular/compiler/src/render3/r3_ast';
import { User } from 'firebase';
import { Metadata } from './Metadata';

export interface News {
    title : string;
    content : Content,
    metadata: Metadata
}