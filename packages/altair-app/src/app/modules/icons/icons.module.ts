import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';

import { FeatherModule } from 'angular-feather';
import {
  AlertTriangle,
  AlertCircle,
  Archive,
  ArrowLeft,
  Book,
  Box,
  Briefcase,
  CheckCircle,
  ChevronDown,
  Circle,
  Clock,
  Code,
  Copy,
  Cpu,
  Camera,
  Disc,
  Download,
  Edit,
  Eye,
  EyeOff,
  File,
  FilePlus,
  Folder,
  FolderMinus,
  FolderPlus,
  Github,
  Grid,
  Heart,
  Home,
  Info,
  MoreVertical,
  MoreHorizontal,
  Paperclip,
  RefreshCcw,
  Settings,
  Save,
  Trash2,
  Loader,
  LogIn,
  Minimize2,
  PlusSquare,
  PlusCircle,
  Repeat,
  Sidebar,
  Sun,
  Terminal,
  Tag,
  Watch,
  X,
  XCircle,
  XSquare,
} from 'angular-feather/icons';

const icons = {
  AlertTriangle,
  AlertCircle,
  Archive,
  ArrowLeft,
  Book,
  Box,
  Briefcase,
  CheckCircle,
  ChevronDown,
  Circle,
  Clock,
  Code,
  Copy,
  Cpu,
  Camera,
  Disc,
  Download,
  Edit,
  Eye,
  EyeOff,
  File,
  FilePlus,
  Folder,
  FolderMinus,
  FolderPlus,
  Github,
  Grid,
  Heart,
  Home,
  Info,
  MoreVertical,
  MoreHorizontal,
  Paperclip,
  RefreshCcw,
  Settings,
  Save,
  Trash2,
  Loader,
  LogIn,
  Minimize2,
  PlusSquare,
  PlusCircle,
  Repeat,
  Sidebar,
  Sun,
  Terminal,
  Tag,
  Watch,
  X,
  XCircle,
  XSquare,
};

@NgModule({
  declarations: [
    IconComponent,
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
  ],
  exports: [
    IconComponent,
    FeatherModule,
  ],
})
export class IconsModule { }
