---
id: ch07-peano-non-unicite
type: proposition
chapter: 7
title: Théorème de Peano et contre-exemple à l'unicité : $\alpha'=2|\alpha|^{1/2}$
ref: Remarque VII.2.5
page: 129
importance: 2
depends: [ch07-champ-vecteurs-courbe-integrale-def, ch07-localement-lipschitzien-def, ch07-cauchy-lipschitz, ch07-equations-implicites-remarque]
tags: [peano, unicite, contre-exemple, lipschitz, equation-implicite, racine-carree]
---
## Intuition

> 💡 Dans le théorème de Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]), la **continuité** de $X$ achète l'existence et le caractère **lipschitzien** achète l'unicité. Le champ $X(x)=2|x|^{1/2}$ est continu mais a une tangente verticale en $0$ : près de $0$, deux positions très proches reçoivent des vitesses dont l'écart $2(\sqrt{|x_1|}-\sqrt{|x_2|})$ est énorme devant $|x_1-x_2|$. Une particule posée en $0$ peut y rester éternellement ($\alpha\equiv0$) ou « décoller » à n'importe quel instant $c$ en suivant une parabole : impossible de prédire son avenir à partir de sa position. Le déterminisme est perdu.

Image : la parabole $t\mapsto t^2$ arrive en $0$ avec une vitesse nulle, exactement la vitesse de la solution constante ; les deux trajectoires se **recollent** de façon $C^1$ en $0$ et l'équation ne voit pas la différence.

Vocabulaire. Une **courbe intégrale** de $X$ de condition initiale $(t_0,x)$ est une courbe $\alpha$ de classe $C^1$ avec $\alpha'(t)=X(t,\alpha(t))$ et $\alpha(t_0)=x$ ([[ch07-champ-vecteurs-courbe-integrale-def]]). Une **équation implicite** est de la forme $f(t,\alpha(t),\alpha'(t))=0$ ([[ch07-equations-implicites-remarque]]) : elle ne donne pas $\alpha'$ comme fonction de $(t,\alpha)$. Le théorème de Peano, cité ci-dessous, est **admis** (non démontré dans le poly).

## Énoncé

**Proposition (poly, Remarque VII.2.5, p. 129).**

**(a) Théorème de Peano (admis).** Si $E$ est de dimension finie, il suffit que le champ $X : I\times U\to E$ soit **continu** pour que, pour tout $(t_0,x)\in I\times U$, il existe une courbe intégrale de $X$ de condition initiale $(t_0,x)$ définie sur un intervalle ouvert contenant $t_0$.

**(b) Défaut d'unicité.** La solution n'est alors pas nécessairement unique : pour le champ continu $X(x)=2|x|^{1/2}$ sur $\R$, le problème
$$
\alpha'(t)=2\,|\alpha(t)|^{1/2},\qquad\alpha(0)=0,
$$
possède (au moins) deux solutions définies sur $\R$ : $\alpha_1(t)=0$ et $\alpha_2(t)=\mathrm{signe}(t)\,t^2$.

**(c) Équations implicites.** Le théorème de Cauchy-Lipschitz n'est pas vrai pour les équations implicites $f(t,\alpha(t),\alpha'(t))=0$, même avec $f$ de classe $C^\infty$ : l'équation $\alpha'(t)^2-4\alpha(t)=0$ possède deux solutions sur $\R$ telles que $\alpha(0)=0$, à savoir $\alpha\equiv0$ et $\alpha(t)=t^2$.

*Précision.* Le poly écrit « il suffit que $X$ soit continue » sans préciser la dimension : le théorème de Peano est un énoncé de **dimension finie** (il repose sur le théorème d'Ascoli) ; il est faux dans les espaces de Banach de dimension infinie (contre-exemple de Dieudonné dans l'espace $c_0$ des suites tendant vers $0$, hors programme).

## Hypothèses

### H1 — $X$ continue (pour l'existence de Peano)

**Rôle.** C'est l'hypothèse minimale pour que $t\mapsto X(t,\alpha(t))$ ait un sens continu et que les solutions approchées (schéma d'Euler) aient une sous-suite convergeant vers une vraie solution.

**Si on la retire.** Plus d'existence : pour $X(x)=1$ si $x\le0$ et $X(x)=-1$ si $x>0$, le problème $\alpha'=X(\alpha)$, $\alpha(0)=0$ n'a aucune solution $C^1$ sur un intervalle ouvert contenant $0$. En effet $\alpha'(0)=X(0)=1>0$, donc par continuité de $\alpha'$ on a $\alpha'>0$ et $\alpha>0$ sur un $]0\,;h[$, d'où $\alpha'=X(\alpha)=-1<0$ sur $]0\,;h[$ : contradiction.

### H2 — $E$ de dimension finie (pour Peano)

**Rôle.** La preuve de Peano extrait une sous-suite convergente d'une famille de solutions approchées bornées et équicontinues : c'est le théorème d'Ascoli, qui demande que les boules de $E$ soient compactes.

**Si on la retire.** Le théorème de Peano est faux en dimension infinie (Dieudonné, 1950 : un champ continu sur $c_0$ sans solution issue de $0$). En revanche le théorème de Cauchy-Lipschitz, lui, est valable dans tout espace de Banach : c'est un avantage décisif de l'hypothèse lipschitzienne.

### H3 — Absence d'hypothèse lipschitzienne (pour (b) et (c))

**Rôle.** Dans (b), $X(x)=2|x|^{1/2}$ n'est lipschitzien sur aucun voisinage de $0$ : $\dfrac{|X(x)-X(0)|}{|x-0|}=\dfrac{2}{\sqrt{|x|}}\to+\infty$. C'est ce qui rend possible le recollement de la solution nulle et des paraboles. Dans (c), l'équation implicite $v^2-4x=0$ a pour « résolution » $v=\pm2\sqrt x$, non lipschitzienne en $x=0$ (et $\partial f/\partial v=2v$ s'annule en $v=0$, ce qui empêche d'appliquer le théorème des fonctions implicites, cf. [[ch07-equations-implicites-remarque]]).

**Si on l'ajoute.** Si $X$ est localement lipschitzien en la seconde variable ([[ch07-localement-lipschitzien-def]]), l'unicité est restaurée : c'est le théorème [[ch07-cauchy-lipschitz]]. Par exemple $\alpha'=2|\alpha|$, $\alpha(0)=0$ ($X(x)=2|x|$ est $2$-lipschitzien) a pour unique solution $\alpha\equiv0$.

## Idée de la preuve

(a) est admis. (b) et (c) : vérifications directes ; le seul point délicat est la dérivabilité de $\mathrm{signe}(t)\,t^2$ en $0$ (dérivée nulle) et la vérification **séparée** sur $t>0$, $t<0$, $t=0$.

## Preuve

**(a)** Admis (théorème de Peano, 1890 ; preuve par le schéma d'Euler et le théorème d'Ascoli, hors programme).

**(b)** Le champ $X(x)=2|x|^{1/2}$ est continu sur $\R$ (composée de $|\cdot|$ et de la racine carrée, continues). La fonction $\alpha_1\equiv0$ est $C^1$ et vérifie $\alpha_1'(t)=0=2|0|^{1/2}=2|\alpha_1(t)|^{1/2}$ et $\alpha_1(0)=0$.

Pour $\alpha_2(t)=\mathrm{signe}(t)\,t^2$, c'est-à-dire $\alpha_2(t)=t^2$ si $t\ge0$ et $\alpha_2(t)=-t^2$ si $t<0$ :

* pour $t>0$ : $\alpha_2'(t)=2t$ et $2|\alpha_2(t)|^{1/2}=2\sqrt{t^2}=2t$ ;
* pour $t<0$ : $\alpha_2'(t)=-2t=2|t|$ et $2|\alpha_2(t)|^{1/2}=2\sqrt{t^2}=2|t|$ ;
* en $t=0$ : $\dfrac{\alpha_2(t)-\alpha_2(0)}{t}=\mathrm{signe}(t)\,t\xrightarrow[t\to0]{}0$, donc $\alpha_2'(0)=0=2|\alpha_2(0)|^{1/2}$.

Ainsi $\alpha_2'(t)=2|t|$ pour tout $t$ : $\alpha_2$ est de classe $C^1$ sur $\R$, vérifie l'équation et $\alpha_2(0)=0$. Comme $\alpha_1\ne\alpha_2$ (par exemple $\alpha_2(1)=1$), l'unicité est en défaut.

*Complément : une infinité de solutions.* Pour $c\ge0$, posons $\alpha_c(t)=0$ si $t\le c$ et $\alpha_c(t)=(t-c)^2$ si $t\ge c$. La fonction $\alpha_c$ est $C^1$ (dérivée $0$ à gauche de $c$, $2(t-c)\to0$ à droite), vérifie $\alpha_c(0)=0$ et l'équation : $0=2|0|^{1/2}$ pour $t\le c$, $2(t-c)=2\sqrt{(t-c)^2}$ pour $t\ge c$. Les $\alpha_c$ ($c\ge0$) sont deux à deux distinctes. On peut de même décoller vers le bas à un instant $d\le0$ (poser $-(t-d)^2$ pour $t\le d$) : le problème a une infinité de solutions sur $\R$, et deux solutions quelconques issues de $(0,0)$ ne coïncident en général que sur un intervalle.

**(c)** Posons $f(t,x,v)=v^2-4x$, polynomiale donc $C^\infty$. La fonction nulle vérifie $0^2-4\cdot0=0$. La fonction $\alpha(t)=t^2$ vérifie $\alpha'(t)^2-4\alpha(t)=(2t)^2-4t^2=0$ pour tout $t\in\R$, et $\alpha(0)=0$. Ces deux solutions sont distinctes : l'équation implicite $f(t,\alpha,\alpha')=0$, pourtant $C^\infty$, n'a pas l'unicité. (Au point $(t,x,v)=(0,0,0)$, $\partial f/\partial v=2v=0$ : le théorème des fonctions implicites ne permet pas d'écrire $\alpha'=X(t,\alpha)$ au voisinage de ce point.) $\square$

*Attention à une lecture trop rapide du poly :* la solution $\alpha_2(t)=\mathrm{signe}(t)\,t^2$ de (b) n'est **pas** solution de l'équation implicite de (c) pour $t<0$, car $\alpha'^2-4\alpha=0$ force $\alpha\ge0$ alors que $\alpha_2(t)=-t^2<0$ (en $t=-1$ : $\alpha_2'^2-4\alpha_2=4+4=8\ne0$). Les deux solutions de (c) sur $\R$ sont $0$ et $t^2$ (ou encore les $\alpha_c$ ci-dessus, qui sont $\ge0$).

## Preuve à trous

**(b)** $\alpha_1\equiv0$ convient trivialement. Pour $\alpha_2(t)=\mathrm{signe}(t)\,t^2$ : pour $t>0$, $\alpha_2'=2t=2\sqrt{t^2}$ ; pour $t<0$, <trou indice="attention au signe : $\alpha_2=-t^2$">$\alpha_2'(t)=-2t=2|t|=2\sqrt{t^2}=2|\alpha_2(t)|^{1/2}$</trou> ; en $0$, <trou indice="taux d'accroissement">$\frac{\alpha_2(t)}{t}=\mathrm{signe}(t)\,t\to0$, donc $\alpha_2'(0)=0=2|\alpha_2(0)|^{1/2}$</trou>. Donc $\alpha_2'(t)=2|t|$ est continue, $\alpha_2$ est $C^1$ et résout le problème ; $\alpha_2\ne\alpha_1$. Plus généralement, <trou indice="décoller à l'instant $c$">$\alpha_c(t)=0$ pour $t\le c$ et $(t-c)^2$ pour $t\ge c$ ($c\ge0$)</trou> est encore solution : infinité de solutions.

**(c)** $f(t,x,v)=v^2-4x$ est $C^\infty$ ; $\alpha\equiv0$ et <trou indice="une parabole positive sur tout $\R$">$\alpha(t)=t^2$ (car $(2t)^2-4t^2=0$)</trou> sont deux solutions distinctes avec $\alpha(0)=0$. $\square$

## Exemples

* **Le même phénomène pour $\alpha'=|\alpha|^{a}$, $0<a<1$.** Avec $\alpha(0)=0$ : la solution nulle et $\alpha(t)=\big((1-a)t\big)^{1/(1-a)}$ pour $t\ge0$ (prolongée par $0$ pour $t\le0$). Vérification pour $t>0$ : $\alpha'=(1-a)^{1/(1-a)}\cdot\frac{1}{1-a}\,t^{a/(1-a)}=\big((1-a)t\big)^{a/(1-a)}=\alpha^a$. Pour $a=\frac12$ on retrouve $(t/2)^2$, solution de $\alpha'=|\alpha|^{1/2}$. Dès que $a\ge1$, $x\mapsto|x|^a$ est localement lipschitzien (dérivable de dérivée $a|x|^{a-1}\mathrm{signe}(x)$ bornée près de $0$ pour $a>1$, et $1$-lipschitzien pour $a=1$) : unicité.
* **Non-unicité vers le passé aussi.** Pour $\alpha'=2|\alpha|^{1/2}$ avec $\alpha(0)=1$, la solution est unique **tant qu'elle reste $>0$** (le champ est $C^\infty$ sur $]0\,;+\infty[$) : $\alpha(t)=(t+1)^2$ pour $t>-1$. En $t=-1$ elle atteint $0$ avec vitesse nulle ; pour $t<-1$ on peut prolonger par $0$ sur $[d\,;-1]$ puis par $-(t-d)^2$ pour $t<d$, pour tout $d\le-1$ : l'**unicité globale** ([[ch07-unicite-globale]]) tombe aussi.
* **Une équation implicite sans ce défaut.** $\alpha'^2=1+\alpha^2$ : ici $\partial f/\partial v=2v\ne0$ sur les solutions (car $v^2=1+x^2\ge1$), et l'équation équivaut localement à $\alpha'=\sqrt{1+\alpha^2}$ ou $\alpha'=-\sqrt{1+\alpha^2}$, champs $C^\infty$ : chaque branche relève de Cauchy-Lipschitz (solutions $\sinh(\pm t+c)$).

## Pièges

* > ⚠️ **Continuité $\ne$ unicité.** Le réflexe « $X$ continue donc Cauchy-Lipschitz » est faux : il faut localement lipschitzien (ou $C^1$, [[ch07-restriction-domaine-c1-lipschitz]]). Le point à surveiller : les racines $|x|^{a}$, $a<1$, et plus généralement les tangentes verticales du champ.
* La vérification de $\alpha_2(t)=\mathrm{signe}(t)\,t^2$ se fait en **trois cas** ($t>0$, $t<0$, $t=0$) ; en $t=0$ il faut revenir au taux d'accroissement. Écrire « $\alpha_2'=2t$ » sur tout $\R$ est faux ($\alpha_2'=2|t|$).
* $\mathrm{signe}(t)\,t^2$ **n'est pas** solution de l'équation implicite $\alpha'^2=4\alpha$ pour $t<0$ (il faudrait $\alpha\ge0$) ; pour (c), prendre $\alpha=t^2$.
* Peano est un énoncé de **dimension finie** et ne donne **aucune** unicité ; Cauchy-Lipschitz vaut dans tout Banach. Ne pas invoquer Peano dans un espace de fonctions.
* Ce contre-exemple est aussi celui à retenir pour : l'hypothèse H4 de [[ch07-cauchy-lipschitz]], l'unicité globale [[ch07-unicite-globale]], et l'impossibilité de définir un flot ([[ch07-flot-local-def]]) sans hypothèse lipschitzienne.
