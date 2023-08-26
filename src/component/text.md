<!-- 1) Side effect is code that we don't directly show on the screen for eg fatching API.

2) If we call API in a component then it run when component render and if we write use state code inside the api then it cause infinite loop because we use usestate then also component render.

3) useEffect run on the condition that we specify not run every time this is how it solve the problem.



3)

1) when user reload or state change the page the information got vanish because browser reload the data again.

2) 1) If we store the information in the localstorage.

2) and check once when the page is reload for first time.

3) this can we achieve using use effect.



3) useEffect run when the dependency change. first time these is no dependency so [] is set and because we are not changing it so it will not call further.



4) & 5)



1)useeffect run after whenever page reload & it we write use state code in useeffect in that case that cause infinte loop.

2) Beacuse in that we don't need to write code twice. -->
