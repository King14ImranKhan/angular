tsconconfig.app.json/tsconfig.json/tsconfig.spec.json -> These are type script configuration files.
index.html is main file which gets loaded when application starts.

main.ts -> It contains typescript code and it is first code file. It will load up when angular application starts. Code in this file will be executed first.

asset folder -> Here we can store images 

Code in main.ts file gets executed first. index.html depends on main.ts file changes.
In index.html we see <app-root></app-root> but internally it has also main.js(main.ts) file, which gets executed because typescript does not run in browser.
In main.ts we can see it has imported AppComponent file to execute it.

In app.component.ts file, you are going to see like -
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
This is nothing, it is just component decorator @Component.

From above points it is clear app.component.html is the component for UI related things.

Here we have created new components like
header.component.html
header.component.ts
Now to use this go to index.html file and there we can add <app-header>
and in main.ts file add bootstrapApplication(HeaderComponent);
Then changes of header will be visible.
However typically not we are going to render like this.
In place of adding in main.ts, we can add in app.component.html
<app-header></app-header>
so, comment line added in main.ts
and now import header component in app.component.ts
