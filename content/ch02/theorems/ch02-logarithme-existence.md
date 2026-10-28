---
id: ch02-logarithme-existence
type: proposition
chapter: 2
title: Existence d'un logarithme sur un ouvert simplement connexe
ref: Proposition II.9.3
page: 56
importance: 3
depends: [ch02-primitive-simplement-connexe, ch02-logarithme-def]
tags: [logarithme, simplement connexe, primitive, racine n-ieme, determination]
---
## Intuition

> 💡 Sur un ouvert sans « trou », une fonction holomorphe qui ne s'annule jamais ne peut pas faire tourner son image autour de $0$ le long d'un lacet (le lacet se rétracte en un point, et l'image se rétracte avec lui sans jamais passer par $0$). On peut donc choisir son argument continûment : elle a un logarithme.

Mécanique : un logarithme de $h$ est une primitive de $h'/h$ normalisée pour que $e^{\mathrm{Log}(h)}=h$ ([[ch02-logarithme-def]]). Or sur un ouvert **simplement connexe** (connexe, et tout lacet y est homotope à un lacet constant, [[ch02-homotopie-simplement-connexe]]), **toute** fonction holomorphe a une primitive ([[ch02-primitive-simplement-connexe]]). Il suffit d'appliquer ce théorème à $h'/h$, puis de normaliser.

Conséquence très utilisée : sur un tel ouvert, $h$ a des racines $n$-ièmes holomorphes $e^{\mathrm{Log}(h)/n}$.

## Énoncé

**Proposition (poly, Proposition II.9.3, p. 56).** Si $\Omega$ est un ouvert simplement connexe et si $h\in\Hol(\Omega)$ ne s'annule pas, alors la fonction $h$ admet un logarithme complexe, c'est-à-dire une fonction $\mathrm{Log}(h)\in\Hol(\Omega)$ telle que $\mathrm{Log}(h)'=h'/h$ et $e^{\mathrm{Log}(h)}=h$.

De plus (Définition II.9.2 et son complément), deux logarithmes de $h$ sur $\Omega$ diffèrent d'une constante de $2i\pi\Z$.

## Hypothèses

### H1 — $\Omega$ simplement connexe

**Rôle.** Elle donne, via le Théorème II.9.1 ([[ch02-primitive-simplement-connexe]]), une primitive holomorphe de $h'/h$ ; la connexité (incluse dans la définition de « simplement connexe » du poly) sert à la normalisation $e^{F+c}=h$.

**Si on la retire.** $\Omega=\C\setminus\{0\}$ (ou la couronne $\{1<|z|<2\}$) et $h(z)=z$ : $h$ est holomorphe sans zéro, mais $\int_{C(0,1)}\frac{h'(z)}{h(z)}dz=\int_{C(0,1)}\frac{dz}{z}=2i\pi\neq0$ ([[ch02-indice-cercle]]), donc $h'/h$ n'a pas de primitive ([[ch01-integrale-primitive]]) et $h$ n'a pas de logarithme. Attention, l'hypothèse est **suffisante, pas nécessaire** : $e^{z}$ a le logarithme $z$ sur tout ouvert.

### H2 — $h$ holomorphe

**Rôle.** $h'/h$ doit être holomorphe pour lui appliquer le théorème d'existence de primitives.

**Si on la retire.** $h(z)=\bar z$ sur le disque $D(1,1/2)$ (convexe, donc simplement connexe) ne s'annule pas, mais aucune $L$ holomorphe ne vérifie $e^{L}=\bar z$ : sinon $\bar z=e^{L(z)}$ serait holomorphe, ce qui est faux ([[ch01-exemple-zbar-rez-module]]). (Il existe en revanche des logarithmes *continus*, par exemple $\overline{\mathrm{Log}(z)}$.)

### H3 — $h$ ne s'annule pas

**Rôle.** Elle rend $h'/h$ holomorphe sur tout $\Omega$ et elle est nécessaire puisque $e^{L}\neq0$.

**Si on la retire.** $h(z)=z$ sur $D(0,1)$ (convexe) : $e^{L(0)}=0$ est impossible. Même $h(z)=z^2$, qui a pourtant une racine carrée holomorphe ($z$), n'a pas de logarithme sur $D(0,1)$.

## Idée de la preuve

$h'/h$ est holomorphe sur $\Omega$ simplement connexe, donc a une primitive $F$ (Théorème II.9.1). Alors $(h\,e^{-F})'=0$ donc $h\,e^{-F}=C\in\C^\times$ ; on choisit $c$ avec $e^{c}=C$ et $F+c$ est un logarithme.

## Preuve

Comme $h$ est holomorphe et ne s'annule pas sur $\Omega$, la fonction $g:=h'/h$ est holomorphe sur $\Omega$ (quotient de fonctions holomorphes à dénominateur non nul ; $h'$ est holomorphe car une fonction holomorphe est $C^\infty$, [[ch01-holomorphe-analytique]]).

L'ouvert $\Omega$ étant simplement connexe, le Théorème II.9.1 ([[ch02-primitive-simplement-connexe]]) fournit $F\in\Hol(\Omega)$ avec $F'=g=h'/h$. Explicitement, $z_0\in\Omega$ étant fixé, $F(z)=\int_{\gamma_z}\frac{h'(\zeta)}{h(\zeta)}\,d\zeta$ pour n'importe quel chemin $\gamma_z$ de $z_0$ à $z$ dans $\Omega$.

Normalisons (complément de la Définition II.9.2, [[ch02-logarithme-def]]). On a
$$
\big(h\,e^{-F}\big)'=h'\,e^{-F}-h\,F'\,e^{-F}=\Big(h'-h\,\frac{h'}{h}\Big)e^{-F}=0 .
$$
Comme $\Omega$ est connexe (c'est inclus dans « simplement connexe »), $h\,e^{-F}$ est constante, égale à $C:=h(z_0)e^{-F(z_0)}$, et $C\neq0$ car $h(z_0)\neq0$. L'exponentielle étant surjective de $\C$ sur $\C^\times$ ([[ch01-exp-image-c-etoile-log-local]]), on choisit $c\in\C$ avec $e^{c}=C$. Alors $L:=F+c$ est holomorphe, $L'=h'/h$ et $e^{L}=e^{c}e^{F}=C\,e^{F}=h$ : $L$ est un logarithme de $h$. $\square$

Formule à retenir : si $e^{c}=h(z_0)$,
$$
\mathrm{Log}(h)(z)=c+\int_{\gamma_z}\frac{h'(\zeta)}{h(\zeta)}\,d\zeta .
$$

## Preuve à trous

Comme $h$ ne s'annule pas, <trou indice="quelle fonction faut-il primitiver ?">$g=h'/h$ est holomorphe sur $\Omega$</trou>. Puisque $\Omega$ est simplement connexe, <trou indice="résultat de la section II.9">le Théorème II.9.1 donne $F\in\Hol(\Omega)$ avec $F'=h'/h$</trou>. Ensuite
$$
\big(h\,e^{-F}\big)'=h'e^{-F}-hF'e^{-F}=0,
$$
donc, $\Omega$ étant connexe, <trou>$h\,e^{-F}$ est une constante $C$, non nulle car $h$ et $e^{-F}$ ne s'annulent pas</trou>. Enfin <trou indice="surjectivité de l'exponentielle">on choisit $c$ tel que $e^{c}=C$ ; alors $L=F+c$ vérifie $L'=h'/h$ et $e^{L}=h$</trou>. $\square$

## Exemples

* **Détermination principale.** $\Omega=\C\setminus\R_-$ est étoilé en $1$, donc simplement connexe ([[ch02-etoile-simplement-connexe]]) ; $h(z)=z$ y a un logarithme, celui qui s'annule en $1$ : c'est $\mathrm{Log}$ ([[ch02-logarithme-determination-principale-def]]). De même $\C\setminus\R_+$ est étoilé en $-1$ (si $z\notin\R_+$, un point $(1-t)(-1)+tz$ du segment $[-1,z]$ n'est réel que si $t=0$ ou $z\in\R$, et alors $z<0$ et le segment est dans $]-\infty,0[$) : il y a un logarithme de $z$ d'argument dans $]0,2\pi[$, utilisé dans [[ch02-exemple-trou-de-serrure]].
* **$\log\cos$ sur un disque.** Les zéros de $\cos$ sont les $\frac\pi2+k\pi$, $k\in\Z$ (tous réels), donc $\cos$ ne s'annule pas sur $D(0,\pi/2)$, qui est convexe. Il existe donc $L\in\Hol(D(0,\pi/2))$ avec $e^{L}=\cos$ et $L(0)=0$ (car $\cos 0=1=e^{0}$) : $L(z)=-\int_{[0,z]}\tan(\zeta)\,d\zeta$, puisque $\cos'/\cos=-\tan$. Son développement commence par $L(z)=-\frac{z^2}{2}-\frac{z^4}{12}-\cdots$ (car $\tan\zeta=\zeta+\frac{\zeta^3}{3}+\cdots$).
* **Racines $n$-ièmes.** Si $h$ ne s'annule pas sur $\Omega$ simplement connexe et $n\ge1$, alors $r:=e^{\mathrm{Log}(h)/n}$ est holomorphe et $r^{n}=e^{\mathrm{Log}(h)}=h$. Par exemple $1-z^2$ ne s'annule pas sur $D(0,1)$ : il existe $r\in\Hol(D(0,1))$ avec $r^2=1-z^2$ et $r(0)=1$. C'est l'argument clé de la première étape du théorème de Riemann ([[ch03-riemann-sigma-non-vide]]).

## Pièges

* > ⚠️ La réciproque est fausse : un logarithme peut exister sur un ouvert non simplement connexe ($e^{z}$ sur $\C^\times$ ; $\frac{z-1}{z+1}$ sur $\C\setminus[-1,1]$). L'obstruction exacte est l'existence d'un lacet $\gamma$ avec $\int_\gamma h'/h\neq0$, c'est-à-dire $\Ind_0(h\circ\gamma)\neq0$.
* Ne pas oublier la **normalisation** : une primitive de $h'/h$ n'est un logarithme qu'à une constante près.
* Le logarithme obtenu n'est pas $\mathrm{Log}\circ h$ (détermination principale) en général : $h(\Omega)$ peut rencontrer $\R_-$ (ex. $h(z)=e^{z}$ sur $\C$).
* La proposition ne dit rien de l'unicité : elle vient de la Définition II.9.2 (modulo $2i\pi\Z$, sur un connexe).
