---
id: ch02-logarithme-def
type: definition
chapter: 2
title: Logarithme d'une fonction holomorphe ne s'annulant pas
ref: Définition II.9.2
page: 56
importance: 2
depends: [ch02-primitive-simplement-connexe]
tags: [logarithme, primitive, exponentielle, derivee logarithmique, determination]
---
## Intuition

> 💡 « Prendre le logarithme de $h$ », c'est trouver une fonction holomorphe $L$ telle que $e^{L}=h$. Si une telle $L$ existe, on dérive : $L'\,e^{L}=h'$, donc $L'=h'/h$. Un logarithme est donc forcément une **primitive de la dérivée logarithmique** $h'/h$ ; et réciproquement une primitive de $h'/h$ est un logarithme, à une constante additive près. La question « $h$ a-t-elle un logarithme ? » devient « $h'/h$ a-t-elle une primitive ? », qui est une question **topologique** sur l'ouvert ([[ch02-primitive-simplement-connexe]]).

Image mentale : comme $|e^{L}|=e^{\Re(L)}$, on a $\Re(L)=\log|h|$ (aucun choix) et $\Im(L)$ est un **argument de $h(z)$ choisi continûment** en $z$. L'obstruction : si, le long d'un lacet, le point $h(z)$ fait un tour autour de $0$, l'argument a gagné $2\pi$ au retour et ne peut pas être une fonction (univoque) de $z$.

Rappels. $\Hol(\Omega)$ est l'ensemble des fonctions holomorphes sur l'ouvert $\Omega$ ([[ch01-def-holomorphe]]). Une **primitive holomorphe** de $g\in\Hol(\Omega)$ est une $F\in\Hol(\Omega)$ telle que $F'=g$. L'exponentielle complexe $\exp:\C\to\C^\times$ est surjective et $e^{w}=1\iff w\in 2i\pi\Z$ ([[ch01-exp-trigo-hyperboliques]], [[ch01-exp-image-c-etoile-log-local]]).

## Énoncé

**Définition (poly, Définition II.9.2, p. 56).** Soit $h\in\Hol(\Omega)$ ne s'annulant pas. On appelle **logarithme** de $h$ et l'on note $\mathrm{Log}(h)$ toute primitive holomorphe — lorsqu'elle existe — de la fonction $h'/h$ qui vérifie de plus $e^{\mathrm{Log}(h)}=h$.

**Complément (poly, p. 56).** Cette dernière normalisation est toujours réalisable sur un ouvert **connexe** : si $F$ est une primitive de $h'/h$, la fonction $h\,e^{-F}$ a une dérivée nulle, donc est une constante $C\neq0$, et il suffit de remplacer $F$ par $F+c$ où $c$ est un nombre complexe tel que $e^{c}=C$. Un logarithme complexe sur un ouvert connexe est donc bien défini à addition d'un multiple entier de $2i\pi$ près.

**Justification détaillée du complément.** Soit $\Omega$ connexe.

* *Normalisation.* Si $F'=h'/h$, alors $(h\,e^{-F})'=h'e^{-F}-h\,F'e^{-F}=\big(h'-h\cdot\tfrac{h'}{h}\big)e^{-F}=0$. Sur l'ouvert connexe $\Omega$, une fonction holomorphe de dérivée nulle est constante : $h\,e^{-F}\equiv C$, et $C\neq0$ car ni $h$ ni $e^{-F}$ ne s'annulent. Comme $\exp$ est surjective sur $\C^\times$, il existe $c$ avec $e^{c}=C$ ; alors $(F+c)'=h'/h$ et $e^{F+c}=C\,e^{F}=h$.
* *Unicité modulo $2i\pi$.* Si $L_1,L_2$ sont deux logarithmes de $h$, alors $e^{L_1-L_2}=h/h=1$, donc $(L_1-L_2)(z)\in 2i\pi\Z$ pour tout $z$. La fonction $\frac{1}{2i\pi}(L_1-L_2)$ est continue à valeurs dans $\Z$ sur le connexe $\Omega$, donc constante (ses lignes de niveau sont ouvertes et fermées) : $L_1=L_2+2ik\pi$ avec $k\in\Z$. Réciproquement, $L+2ik\pi$ est un logarithme dès que $L$ en est un.
* *Reformulation utile.* Si $L\in\Hol(\Omega)$ vérifie $e^{L}=h$, alors $L$ est **automatiquement** une primitive de $h'/h$ (dériver $e^{L}=h$). Donc : **un logarithme de $h$ est exactement une fonction holomorphe $L$ telle que $e^{L}=h$.** On a alors $\Re(L)=\log|h|$, et $\Im(L)(z)$ est un argument de $h(z)$, qui dépend continûment de $z$.

## Hypothèses

### H1 — $h$ ne s'annule pas sur $\Omega$

**Rôle.** Elle rend $h'/h$ holomorphe sur $\Omega$ ; elle est de toute façon nécessaire, car $e^{L}$ ne s'annule jamais.

**Si on la retire.** $h(z)=z$ sur $D(0,1)$ : aucune fonction $L$ (même non continue) ne vérifie $e^{L(0)}=h(0)=0$. Par ailleurs $h'/h=1/z$ a un pôle en $0$.

### H2 — $\Omega$ connexe (pour la normalisation et l'unicité modulo $2i\pi$)

**Rôle.** On utilise « dérivée nulle $\Rightarrow$ constante » et « continue à valeurs entières $\Rightarrow$ constante », vrais sur un connexe.

**Si on la retire.** Sur chaque composante connexe on peut encore normaliser (donc l'existence d'un logarithme équivaut toujours à l'existence d'une primitive de $h'/h$), mais l'unicité « à $2i\pi k$ près » tombe : sur $\Omega=D(0,1)\cup D(3,1)$ et $h\equiv1$, la fonction $L$ égale à $0$ sur $D(0,1)$ et à $2i\pi$ sur $D(3,1)$ est un logarithme de $h$, et $L-0$ n'est pas constante.

### H3 — existence d'une primitive de $h'/h$ (« lorsqu'elle existe »)

**Rôle.** C'est la vraie condition d'existence. Elle est garantie si $\Omega$ est simplement connexe, par [[ch02-primitive-simplement-connexe]] : c'est la Proposition II.9.3 ([[ch02-logarithme-existence]]).

**Si on la retire.** $h(z)=z$ sur $\Omega=\C\setminus\{0\}$ : $h'/h=1/z$ et $\int_{C(0,1)}\frac{dz}{z}=2i\pi\neq0$, donc $1/z$ n'a pas de primitive sur $\Omega$ (une fonction ayant une primitive a une intégrale nulle sur tout lacet, [[ch01-integrale-primitive]]) : $z$ n'a **pas** de logarithme holomorphe sur $\C^\times$.

## Exemples

* **$h=e^{g}$.** Si $g\in\Hol(\Omega)$ et $\Omega$ est connexe, les logarithmes de $h=e^{g}$ sont exactement les $g+2ik\pi$, $k\in\Z$ — sur **n'importe quel** ouvert connexe, simplement connexe ou non. Par exemple $h(z)=e^{1/z}$ sur $\C^\times$ a pour logarithme $1/z$.
* **$h(z)=z$ sur $D(1,1)$.** La série $L(z)=\sum_{n\ge1}\frac{(-1)^{n+1}}{n}(z-1)^n$ a pour rayon de convergence $1$ et $L'(z)=\sum_{n\ge1}(-1)^{n+1}(z-1)^{n-1}=\frac{1}{1+(z-1)}=\frac1z$. C'est une primitive de $h'/h=1/z$ ; et $h\,e^{-L}$ est constante, égale à sa valeur en $z=1$, soit $1\cdot e^{0}=1$ : donc $e^{L}=z$, et $L$ est un logarithme de $z$ sur $D(1,1)$ (c'est la restriction de la détermination principale [[ch02-logarithme-determination-principale-def]]).
* **Non-existence sur une couronne.** Sur $A=\{1<|z|<2\}$, ni $h(z)=z$ ni $h(z)=z^2$ n'ont de logarithme : $\int_{C(0,3/2)}\frac{h'}{h}\,dz$ vaut $\int_{C(0,3/2)}\frac{dz}{z}=2i\pi$, resp. $\int_{C(0,3/2)}\frac{2\,dz}{z}=4i\pi$, non nuls. En revanche $h(z)=e^{z}$ y a le logarithme $z$.

## Pièges

* > ⚠️ $\mathrm{Log}(h)$ n'est **pas** en général la composée $\mathrm{Log}\circ h$ avec la détermination principale : celle-ci n'est un logarithme de $h$ que si $h(\Omega)\subset\C\setminus\R_-$. Sinon $\mathrm{Log}\circ h$ n'est même pas continue.
* Une primitive de $h'/h$ n'est un logarithme qu'**après normalisation** : sur $\C\setminus\R_-$, $F(z)=\mathrm{Log}(z)+1$ est une primitive de $1/z$ mais $e^{F}=e\,z\neq z$.
* Le logarithme n'est pas unique : il est défini modulo $2i\pi\Z$ (sur un connexe). En conséquence $\mathrm{Log}(h_1)+\mathrm{Log}(h_2)$ est **un** logarithme de $h_1h_2$, égal à un logarithme donné de $h_1h_2$ seulement modulo $2i\pi$.
* « $h$ ne s'annule pas » est nécessaire mais **pas suffisant** ($z$ sur $\C^\times$). À l'inverse, la non-simple connexité n'empêche pas toujours l'existence : $e^{z}$ sur $\C^\times$, ou $\frac{z-1}{z+1}$ sur $\C\setminus[-1,1]$ (pour tout lacet $\gamma$ de cet ouvert, $\int_\gamma\big(\frac{1}{z-1}-\frac{1}{z+1}\big)dz=2i\pi\big(\Ind_{1}(\gamma)-\Ind_{-1}(\gamma)\big)=0$, car $1$ et $-1$ sont dans la même composante connexe de $\C\setminus\gamma$, le segment $[-1,1]$ étant connexe et disjoint de $\gamma$ ; la construction de la preuve de [[ch02-primitive-simplement-connexe]] fournit alors une primitive).
