import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'restaurant',
    pathMatch:'full'
  },
  {
    path :'restaurant',
    component: SkeletonComponent,
    children:[{
      path:'',
      loadChildren:() =>
      import ('../app/modules/home/home.module').then((m) => m.HomeModule)

    },
    
    
    {
      path:'**',
      redirectTo:'restaurant',
      pathMatch:'full'
    }]
  },
   {
    path :'auth',
    component: SkeletonComponent,
    children:[{
      path:'',
      loadChildren:() =>
      import ('../app/modules/auth/auth.module').then((m) => m.AuthModule)

    }]
  },
  {
    path:'**',
    redirectTo:'restaurant',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
