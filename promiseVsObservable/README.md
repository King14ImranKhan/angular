                             Promise

->Both Promise and Observables provide us with abstraction that help us deal with asynchronous nature of our application. However, there are important differences between the two:
->Promise work with asynchronous operations and they either return us a single value(i.e the promise resolves) or an error message(i.e the promise rejects.)
->Another important thing to remember regarding promises is that a request initiated from a promise is not cancellable.(There are some Promise implementation libraries that allow us to cancel promise but, Javascript native Promise implementation does not allow for this.)

Few Problems with Promises -
-> What if I want to cancel a request to the API ?
-> What if I want to retry a failed call ?
-> As your application gets bigger, Promises become hard to manage.

                             
                             Observables

->An Observable is an array or a sequence of events over time. It has atleast two participants. The creator(the data source) and the subscriber(subscription - where data is being consumed). And compared to Promise, an Observable can be cancelled.
->RxJS is all about unifying the ideas of Promises, callbacks and dataflow, and making them easier to work with.
->Observable provides operators like map, forEach, reduce,... similar to an array.
->These are also powerful operators like retry(), or replay(), retryWhen(), delay() 

Note-
With Promise, you handle one result using .then().
With Observable, you can transform, filter, combine multiple events, and even cancel previous operations — all with RxJS operators.

RxJS-
It is not internal part of angular. RxJS is an external Library which is used in Reactive programming. In which we can use Observable to handle asynchrnous tasks.
RxJS can be used outside also like with normal HTML also. Because it is an external library.
Observable is introduced in RxJS. It is an important topic of RxJS.
Observable is datasource whose work is to emit data time to time. In order to use these data coming from Observable, we need to subscribe it.
Whenever we are using Observable then we must subcribe it.

What is NgRx?
NgRx = Angular + RxJS + Redux pattern
It’s a state management library for Angular based on the Redux architecture and uses RxJS Observables for reactivity.
It helps you manage the application state in a predictable, centralized, and reactive way.