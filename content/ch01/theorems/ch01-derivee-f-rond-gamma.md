---
id: ch01-derivee-f-rond-gamma
type: lemma
chapter: 1
title: "Dérivée de $f\circ\gamma$ le long d'un chemin (cas holomorphe : $f'(\gamma(t))\gamma'(t)$)"
ref: Lemme I.5.10
page: 17
importance: 2
depends: [ch01-chaine-dz-dzbar, ch01-operateurs-dz-dzbar, ch01-cauchy-riemann, ch01-def-differentiable-r2, ch01-c-derivable-ssi-df-c-lineaire]
tags: [chemin, derivation, regle-de-la-chaine, dz-dzbar]
---
## Intuition

> 💡 On se promène dans $\Omega$ le long d'un chemin $t\mapsto\gamma(t)$ et on lit la valeur de $f$ là où l'on se trouve : on obtient une fonction d'une variable **réelle** $t\mapsto f(\gamma(t))$, à valeurs complexes. Sa vitesse de variation est « la différentielle de $f$ appliquée au vecteur vitesse $\gamma'(t)$ ».

La différentielle d'une fonction $C^1$ s'écrit $df_z(\omega)=\frac{\partial f}{\partial z}(z)\,\omega+\frac{\partial f}{\partial\bar z}(z)\,\bar\omega$ (formule (I.2.4), [[ch01-operateurs-dz-dzbar]]) : une partie qui « tourne avec » $\omega$ et une partie qui le **conjugue**. Si $f$ est holomorphe, la seconde partie disparaît ($\partial f/\partial\bar z=0$, [[ch01-cauchy-riemann]]) et l'on retrouve la règle de dérivation des composées de la variable réelle : $(f\circ\gamma)'=f'(\gamma)\,\gamma'$.

Rappels. Un **chemin** de $\Omega$ est une application $\gamma:[a,b]\to\Omega$ continue et $C^1$ par morceaux ([[ch01-def-chemin-lacet]]) ; ici on le suppose $C^1$ sur tout $[a,b]$ (dérivées à droite en $a$, à gauche en $b$). « $f$ de classe $C^1$ » s'entend au sens réel : $f$, vue comme fonction de $(x,y)\in\R^2$, a des dérivées partielles continues ([[ch01-def-differentiable-r2]]).

## Énoncé

**Lemme (poly, Lemme I.5.10, p. 17).** Soit $f:\Omega\to\C$ une fonction de classe $C^1$ et $\gamma$ un chemin de classe $C^1$ de $\Omega$. Alors
$$
\frac{d(f\circ\gamma)}{dt}(t)=\frac{\partial f}{\partial z}(\gamma(t))\,\gamma'(t)+\frac{\partial f}{\partial\bar z}(\gamma(t))\,\overline{\gamma'(t)}.
$$
En particulier, si $f$ est holomorphe, on a
$$
\frac{d(f\circ\gamma)}{dt}(t)=f'(\gamma(t))\,\gamma'(t).
$$

## Hypothèses

### H1 — $f$ de classe $C^1$ (au sens réel)

**Rôle.** Elle garantit que $f$ est **différentiable** en chaque point $\gamma(t)$, ce qui permet la règle de la chaîne $d(f\circ\gamma)/dt=df_{\gamma(t)}(\gamma'(t))$, puis l'écriture (I.2.4) de $df$. La continuité des dérivées partielles donne en plus que $f\circ\gamma$ est $C^1$, ce qui sert ensuite pour intégrer $(f\circ\gamma)'$ (preuve du [[ch01-integrale-primitive|Théorème I.5.9]]).

**Si on la retire.** La seule existence des dérivées partielles ne suffit pas. Soit $f(x+iy)=\dfrac{x^2y}{x^2+y^2}$ si $(x,y)\neq(0,0)$, $f(0)=0$ (continue, car $|f(x+iy)|\le|y|$). On a $f(x,0)=0$ et $f(0,y)=0$, donc $\frac{\partial f}{\partial x}(0)=\frac{\partial f}{\partial y}(0)=0$ et $\frac{\partial f}{\partial z}(0)=\frac{\partial f}{\partial\bar z}(0)=0$. Pour $\gamma(t)=t(1+i)$, $t\in[-1,1]$ : $f(\gamma(t))=\dfrac{t^3}{2t^2}=\dfrac t2$, de dérivée $\tfrac12$ en $t=0$, alors que le membre de droite de la formule vaut $0$. Ici $f$ n'est pas différentiable en $0$. (La formule ponctuelle reste vraie si $f$ est seulement différentiable en $\gamma(t)$ : le $C^1$ est un peu plus que nécessaire pour l'égalité en un point.)

### H2 — $\gamma$ de classe $C^1$ (et pas seulement $C^1$ par morceaux)

**Rôle.** Il faut que $\gamma'(t)$ existe pour que la formule ait un sens.

**Si on la retire.** Pour un chemin seulement $C^1$ par morceaux, la formule reste vraie en dehors des points de raccord (en nombre fini), mais pas en ces points : avec $f(z)=z$ et $\gamma(t)=t$ pour $t\in[-1,0]$, $\gamma(t)=it$ pour $t\in[0,1]$, la fonction $f\circ\gamma=\gamma$ n'est pas dérivable en $t=0$ (dérivée à gauche $1$, à droite $i$). C'est pourquoi les preuves du poly découpent un chemin en morceaux $C^1$.

### H3 — $f$ holomorphe (pour la seconde formule)

**Rôle.** Si $f$ est holomorphe, alors $f$ est $C^1$ au sens réel (sa différentielle est la multiplication par $f'(z)$, qui est continue, [[ch01-c-derivable-ssi-df-c-lineaire]]), $\frac{\partial f}{\partial\bar z}=0$ et $\frac{\partial f}{\partial z}=f'$ ([[ch01-cauchy-riemann]], formules (I.2.5) et (I.2.7)).

**Si on la retire.** Pour $f(z)=\bar z$ (qui est $C^1$ mais pas holomorphe, [[ch01-exemple-zbar-rez-module]]) et $\gamma(t)=e^{it}$ : $\dfrac{d}{dt}e^{-it}=-ie^{-it}$. La première formule donne bien $\frac{\partial f}{\partial z}=0$, $\frac{\partial f}{\partial\bar z}=1$, donc $0\cdot ie^{it}+1\cdot\overline{ie^{it}}=-ie^{-it}$ ; mais il n'y a pas de « $f'$ » et le terme en $\overline{\gamma'(t)}$ est le seul présent.

## Idée de la preuve

Règle de la chaîne pour les différentielles : $\frac{d}{dt}f(\gamma(t))=df_{\gamma(t)}(\gamma'(t))$, puis on décompose $df_{\gamma(t)}$ grâce à (I.2.4). Le cas holomorphe vient de $\partial f/\partial\bar z=0$, $\partial f/\partial z=f'$.

## Preuve

Le poly laisse la preuve en exercice en indiquant qu'elle « utilise le lemme I.2.9 » ([[ch01-chaine-dz-dzbar]]). On donne la preuve directe (c'est exactement le mécanisme de la preuve du lemme I.2.9 : composition des différentielles), puis la déduction à partir du lemme I.2.9.

**Preuve directe.** Fixons $t\in[a,b]$. Identifions $\C$ à $\R^2$. La fonction $\gamma:[a,b]\to\R^2$ est dérivable en $t$ (à droite ou à gauche si $t$ est une extrémité), de dérivée le vecteur $\gamma'(t)$ : $\gamma(t+s)=\gamma(t)+s\gamma'(t)+o(s)$ quand $s\to0$ ($s$ réel). Comme $f$ est $C^1$, elle est différentiable en $\gamma(t)$ ([[ch01-def-differentiable-r2]]) : $f(\gamma(t)+\omega)=f(\gamma(t))+df_{\gamma(t)}(\omega)+o(|\omega|)$. Avec $\omega=\gamma(t+s)-\gamma(t)=s\gamma'(t)+o(s)$, qui vérifie $|\omega|=O(|s|)$, et par linéarité et continuité de $df_{\gamma(t)}$ :
$$
f(\gamma(t+s))=f(\gamma(t))+s\,df_{\gamma(t)}(\gamma'(t))+o(s).
$$
Donc $f\circ\gamma$ est dérivable en $t$ et $\dfrac{d(f\circ\gamma)}{dt}(t)=df_{\gamma(t)}(\gamma'(t))$. La formule (I.2.4) ([[ch01-operateurs-dz-dzbar]]) appliquée au point $\gamma(t)$ et au vecteur $\omega=\gamma'(t)$ donne
$$
df_{\gamma(t)}(\gamma'(t))=\frac{\partial f}{\partial z}(\gamma(t))\,\gamma'(t)+\frac{\partial f}{\partial\bar z}(\gamma(t))\,\overline{\gamma'(t)},
$$
d'où la première formule.

*Variante du poly (via le lemme I.2.9).* Pour $t\in\,]a,b[$, posons $g(x+iy):=\gamma(x)$ sur l'ouvert $]a,b[\times\R$ ; $g$ est $C^1$, $\frac{\partial g}{\partial x}=\gamma'(x)$, $\frac{\partial g}{\partial y}=0$, donc $\frac{\partial g}{\partial z}=\frac{\partial g}{\partial\bar z}=\frac12\gamma'(x)$ et $\frac{\partial\bar g}{\partial z}=\frac{\partial\bar g}{\partial\bar z}=\frac12\overline{\gamma'(x)}$. Comme $\frac{\partial}{\partial x}=\frac{\partial}{\partial z}+\frac{\partial}{\partial\bar z}$, le lemme I.2.9 donne
$$
\frac{d(f\circ\gamma)}{dt}(t)=\frac{\partial(f\circ g)}{\partial z}(t)+\frac{\partial(f\circ g)}{\partial\bar z}(t)=2\Bigl(\frac{\partial f}{\partial z}(\gamma(t))\cdot\tfrac12\gamma'(t)+\frac{\partial f}{\partial\bar z}(\gamma(t))\cdot\tfrac12\overline{\gamma'(t)}\Bigr),
$$
qui est la même formule.

**Cas holomorphe.** Si $f$ est holomorphe, $f$ est $C^1$ au sens réel ([[ch01-c-derivable-ssi-df-c-lineaire]] : $df_z$ est la multiplication par $f'(z)$, continue en $z$), et en tout point $\frac{\partial f}{\partial\bar z}=0$ et $\frac{\partial f}{\partial z}=f'$ ([[ch01-cauchy-riemann]], (I.2.5) et (I.2.7)). La formule devient $\dfrac{d(f\circ\gamma)}{dt}(t)=f'(\gamma(t))\,\gamma'(t)$. $\square$

## Preuve à trous

Fixons $t$. Comme $f$ est $C^1$, elle est <trou indice="quelle propriété ponctuelle de f découle du C^1 ?">différentiable en $\gamma(t)$</trou>, et la règle de la chaîne donne
$$
\frac{d(f\circ\gamma)}{dt}(t)=df_{\gamma(t)}(\gamma'(t)).
$$
On écrit alors la différentielle avec les opérateurs $\partial/\partial z$, $\partial/\partial\bar z$ : <trou indice="formule (I.2.4)">$df_z(\omega)=\frac{\partial f}{\partial z}(z)\,\omega+\frac{\partial f}{\partial\bar z}(z)\,\bar\omega$</trou>, appliquée en $z=\gamma(t)$ et $\omega=\gamma'(t)$, ce qui donne la formule annoncée. Si $f$ est holomorphe, <trou indice="conditions de Cauchy réelles">$\frac{\partial f}{\partial\bar z}=0$ et $\frac{\partial f}{\partial z}=f'$</trou>, d'où $\dfrac{d(f\circ\gamma)}{dt}(t)=f'(\gamma(t))\gamma'(t)$. $\square$

## Exemples

* **Puissances sur le cercle.** $f(z)=z^n$, $\gamma(t)=e^{it}$. Directement : $\frac{d}{dt}e^{int}=in\,e^{int}$. Par le lemme : $f'(\gamma(t))\gamma'(t)=n\,e^{i(n-1)t}\cdot ie^{it}=in\,e^{int}$. ✓
* **Une fonction non holomorphe.** $f(z)=|z|^2=z\bar z$, donc $\frac{\partial f}{\partial z}=\bar z$, $\frac{\partial f}{\partial\bar z}=z$ ([[ch01-formulaire-dz-dzbar]]). Pour $\gamma(t)=t+it^2$ : $|\gamma(t)|^2=t^2+t^4$, de dérivée $2t+4t^3$. Le lemme donne $\bar\gamma\gamma'+\gamma\overline{\gamma'}=2\Re\bigl((t-it^2)(1+2it)\bigr)=2\Re\bigl(t+2t^3+i t^2\bigr)=2t+4t^3$. ✓
* **Application immédiate.** Si $F\in\Hol(\Omega)$ et $\gamma:[a,b]\to\Omega$ est $C^1$, $\int_\gamma F'(z)\,dz=\int_a^bF'(\gamma(t))\gamma'(t)\,dt=\int_a^b(F\circ\gamma)'(t)\,dt=F(\gamma(b))-F(\gamma(a))$ : c'est la preuve du Théorème I.5.9 ([[ch01-integrale-primitive]]).

## Pièges

* > ⚠️ Le second terme contient $\overline{\gamma'(t)}$ (conjugué du vecteur vitesse), **pas** $\gamma'(t)$ : c'est la trace de la partie « anti-linéaire » de $df$.
* Ne pas écrire « $f'(\gamma(t))\gamma'(t)$ » pour une fonction non holomorphe : $f'$ n'existe pas en général.
* La variable $t$ est **réelle** : $\frac{d}{dt}$ est une dérivée ordinaire d'une fonction $[a,b]\to\C$ (parties réelle et imaginaire), pas une dérivée complexe.
* Pour un chemin seulement $C^1$ par morceaux, la formule vaut sur chaque morceau ; on recolle ensuite les intégrales (Proposition I.5.6, [[ch01-integrale-reparametrage-oppose-concatenation]]).
