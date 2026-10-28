---
id: ex-ch03-familles-normales-criteres
type: exercise
chapters: [3, 1]
title: Normale ou pas ? Quatre familles de fonctions holomorphes
source: "Classique (exemples standard de familles normales ; cf. Rudin, Real and Complex Analysis, ch. 14), adapté"
difficulty: 2
time: 30
tools: [ch03-montel, ch03-famille-normale, ch03-famille-localement-uniformement-bornee, ch01-lemme-schwarz, ch01-formule-moyenne]
---
## Énoncé

On note $D=D(0,1)$. Rappel : une famille $\mathcal F\subset\Hol(\Omega)$ est *normale* sur l'ouvert $\Omega$ si toute suite d'éléments de $\mathcal F$ admet une sous-suite qui converge localement uniformément sur $\Omega$ (vers une fonction à valeurs dans $\C$).

1. La famille $\{z\mapsto z^n,\ n\ge1\}$ est-elle normale sur $D$ ? Sur $D(0,2)$ ?
2. Soit $\mathcal F_2=\{f\in\Hol(D) : \Re(f(z))>0 \text{ pour tout } z\in D,\ f(0)=1\}$.
   1. Montrer que pour tout $f\in\mathcal F_2$ et tout $z\in D$, $|f(z)|\le\dfrac{1+|z|}{1-|z|}$. En déduire que $\mathcal F_2$ est normale sur $D$.
   2. La famille obtenue en supprimant la condition $f(0)=1$ est-elle normale ?
3. Soit $\mathcal F_3=\Bigl\{f\in\Hol(D) : \iint_D|f(x+iy)|^2\,\dd x\,\dd y\le1\Bigr\}$. Montrer que $|f(z)|\le\dfrac{1}{\sqrt\pi\,(1-|z|)}$ pour tous $f\in\mathcal F_3$ et $z\in D$, et conclure sur la normalité de $\mathcal F_3$.
4. Montrer que la famille $\{z\mapsto\sin(nz),\ n\ge1\}$ n'est normale sur **aucun** ouvert non vide de $\C$. Comparer avec la suite de fonctions réelles $x\mapsto\sin(nx)$ sur $\R$.

## Indices

### Indice 1
Il y a un théorème qui transforme « normale » (compacité, difficile à vérifier directement) en une condition de **borne** facile à tester. Il marche dans les deux sens : pour prouver la normalité, mais aussi pour la réfuter.

### Indice 2
Théorème de Montel : normale $\iff$ localement uniformément bornée. Pour réfuter, il suffit d'un point $z_0$ où $|f_n(z_0)|\to+\infty$. Pour 2, envoyer le demi-plan $\{\Re(w)>0\}$ dans le disque par $T(w)=\frac{w-1}{w+1}$ et utiliser le lemme de Schwarz. Pour 3, formule de la moyenne sur les cercles $C(z,s)$, intégrée en $s$, puis Cauchy–Schwarz.

### Indice 3
Pour 3 : si $\bar D(z,s)\subset D$, $f(z)=\frac1{2\pi}\int_0^{2\pi}f(z+se^{i\theta})\,\dd\theta$ ; multiplier par $s$ et intégrer pour $s\in[0,\rho]$ donne $f(z)=\frac1{\pi\rho^2}\iint_{D(z,\rho)}f$. Pour 4 : $|\sin(x+iy)|^2=\sin^2x+\sinh^2y$.

## Corrigé

On utilise constamment le théorème de Montel ([[ch03-montel]]) : sur un ouvert $\Omega$, une famille $\mathcal F\subset\Hol(\Omega)$ est normale ([[ch03-famille-normale]]) si et seulement si elle est localement uniformément bornée ([[ch03-famille-localement-uniformement-bornee]]), c'est-à-dire bornée uniformément en $f\in\mathcal F$ sur chaque compact.

**1.** *Sur $D$* : $|z^n|\le1$ pour tout $z\in D$ et tout $n$, donc la famille est uniformément bornée sur $D$, a fortiori localement uniformément bornée ; elle est normale par Montel. On peut d'ailleurs le voir à la main : sur $\bar D(0,r)$, $r<1$, $\sup|z^n|=r^n\to0$, donc la suite entière converge localement uniformément vers $0$ (qui n'est pas dans la famille, ce qui est permis), mais **pas** uniformément sur $D$ ($\sup_D|z^n|=1$).

*Sur $D(0,2)$* : au point $z_0=3/2\in D(0,2)$, $|z_0^n|=(3/2)^n\to+\infty$. Toute sous-suite $(z^{n_k})_k$ diverge en $z_0$, donc ne converge même pas simplement : la famille n'est pas normale sur $D(0,2)$.

**2.1.** Soit $f\in\mathcal F_2$. Pour $\Re(w)>0$, $|w-1|^2-|w+1|^2=-4\Re(w)<0$, donc $T(w)=\frac{w-1}{w+1}$ est bien défini ($w\ne-1$) et $|T(w)|<1$. Posons $g=T\circ f=\frac{f-1}{f+1}$ : $g$ est holomorphe sur $D$ (quotient, avec $\Re(f+1)>1$ donc $f+1\ne0$), $g(D)\subset D\subset\bar D(0,1)$ et $g(0)=T(1)=0$. Le lemme de Schwarz ([[ch01-lemme-schwarz]]) donne $|g(z)|\le|z|$ sur $D$. Comme $|g|<1$, on peut inverser : $f=\frac{1+g}{1-g}$, d'où
$$
|f(z)|\le\frac{1+|g(z)|}{1-|g(z)|}\le\frac{1+|z|}{1-|z|},
$$
car $t\mapsto\frac{1+t}{1-t}$ est croissante sur $[0,1[$. La borne est optimale : $f(z)=\frac{1+z}{1-z}$ est dans $\mathcal F_2$ ($\Re f(z)=\frac{1-|z|^2}{|1-z|^2}>0$) et l'atteint pour $z\in[0,1[$.

Tout compact $K\subset D$ est contenu dans un $\bar D(0,r)$ avec $r<1$, sur lequel $|f|\le\frac{1+r}{1-r}$ pour **toute** $f\in\mathcal F_2$ : la famille est localement uniformément bornée, donc normale par Montel.

**2.2.** Non : les constantes $f_n=n$ ($n\ge1$) ont une partie réelle $>0$. Au point $0$, $|f_n(0)|=n\to+\infty$ : la famille n'est pas localement uniformément bornée, donc pas normale (sens « normale $\Rightarrow$ bornée » de Montel ; ou directement : aucune sous-suite de $(f_n(0))$ ne converge). La normalisation $f(0)=1$ est donc essentielle.

**3.** Soit $f\in\mathcal F_3$, $z\in D$ et $0<\rho<1-|z|$, de sorte que $\bar D(z,\rho)\subset D$. Pour $0<s\le\rho$, la formule de la moyenne ([[ch01-formule-moyenne]]) s'applique sur $\bar D(z,s)\subset D$ :
$$
f(z)=\frac1{2\pi}\int_0^{2\pi}f(z+se^{i\theta})\,\dd\theta .
$$
Multiplions par $s$ et intégrons pour $s\in[0,\rho]$ (fonction continue sur le compact $[0,\rho]\times[0,2\pi]$) ; en coordonnées polaires centrées en $z$,
$$
\frac{\rho^2}{2}f(z)=\frac1{2\pi}\int_0^\rho\!\!\int_0^{2\pi}f(z+se^{i\theta})\,s\,\dd\theta\,\dd s=\frac1{2\pi}\iint_{D(z,\rho)}f(x+iy)\,\dd x\,\dd y .
$$
Donc $f(z)=\frac1{\pi\rho^2}\iint_{D(z,\rho)}f$, et par Cauchy–Schwarz,
$$
|f(z)|\le\frac{1}{\pi\rho^2}\Bigl(\iint_{D(z,\rho)}1\Bigr)^{1/2}\Bigl(\iint_{D(z,\rho)}|f|^2\Bigr)^{1/2}\le\frac{(\pi\rho^2)^{1/2}}{\pi\rho^2}\cdot1=\frac{1}{\sqrt\pi\,\rho}.
$$
En faisant $\rho\to1-|z|$ : $|f(z)|\le\frac{1}{\sqrt\pi(1-|z|)}$. Sur $\bar D(0,r)$, $r<1$, toutes les $f\in\mathcal F_3$ sont donc bornées par $\frac1{\sqrt\pi(1-r)}$ : $\mathcal F_3$ est localement uniformément bornée, donc normale (Montel).

**4.** Pour $z=x+iy$, $\sin z=\sin x\cosh y+i\cos x\sinh y$, donc
$$
|\sin z|^2=\sin^2x\cosh^2y+\cos^2x\sinh^2y=\sin^2x+\sinh^2y\ge\sinh^2y .
$$
Soit $\Omega$ un ouvert non vide : il contient un disque, donc un point $z_0=x_0+iy_0$ avec $y_0\ne0$. Alors $|\sin(nz_0)|\ge\sinh(n|y_0|)\to+\infty$. Toute sous-suite de $(\sin(nz))_n$ diverge en $z_0$ : aucune ne converge localement uniformément sur $\Omega$, et la famille n'est pas normale sur $\Omega$.

Sur $\R$, au contraire, $|\sin(nx)|\le1$ : la suite est uniformément bornée, et pourtant aucune sous-suite ne converge uniformément sur un intervalle (Remarque III.3.6 du poly, p. 65). Il n'y a pas de contradiction : la « version réelle » de Montel est fausse, et c'est l'holomorphie (via les estimées de Cauchy, qui donnent l'équicontinuité) qui fait marcher Montel. Ici l'holomorphie se « venge » : les oscillations rapides sur $\R$ se traduisent par une explosion exponentielle hors de $\R$.

## Pièges et variantes

> ⚠️ « Normale » n'exige pas que la limite soit dans la famille : $\{z^n\}$ est normale sur $D$ alors que sa limite $0$ n'est pas de la forme $z^n$. Ne pas confondre avec « fermée » ou « compacte ».

* Montel est une **équivalence** : il sert aussi à prouver qu'une famille *n'est pas* normale (exhiber un point, ou une suite de points d'un compact, où les modules explosent).
* La borne doit être **uniforme en $f$** mais seulement **locale en $z$** : dans 2 et 3, les bornes explosent quand $|z|\to1$, et c'est sans importance.
* Dans 2.1, ne pas oublier de vérifier les hypothèses de Schwarz : $g$ holomorphe sur $D$, à valeurs dans $\bar D(0,1)$, et $g(0)=0$ — c'est là que sert $f(0)=1$.
* Variante : $\{f\in\Hol(D) : f(D)\subset\C\setminus\R_-,\ f(0)=1\}$ est normale (composer par une racine carrée holomorphe pour se ramener au demi-plan).
* Variante : la famille des $f\in\Hol(D)$ telles que $|f(0)|\le1$ et $\Re f>0$ est normale (même preuve en composant par $T_a(w)=\frac{w-a}{w+\bar a}$ avec $a=f(0)$, puis Schwarz).
