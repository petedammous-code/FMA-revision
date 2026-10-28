---
id: ch07-localement-lipschitzien-def
type: definition
chapter: 7
title: Champ localement lipschitzien en la seconde variable
ref: non numéroté, section VII.2, p. 128
page: 128
importance: 2
depends: [ch07-champ-vecteurs-courbe-integrale-def]
tags: [lipschitz, localement-lipschitzien, hypothese, cauchy-lipschitz, unicite]
---
## Intuition

> 💡 « Lipschitzien en $x$ » : deux points proches, au même instant, reçoivent des flèches proches, l'écart entre les flèches étant au plus $k$ fois l'écart entre les points. Le champ ne peut donc écarter deux trajectoires voisines qu'à vitesse proportionnelle à leur distance (au plus exponentiellement, par le lemme de Gronwall) : deux solutions qui coïncident à un instant ne peuvent pas se séparer. C'est **l'hypothèse qui achète l'unicité** dans le théorème de Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]).

« Localement » : la constante $k$ dépend du point $(t_0,x_0)$ autour duquel on regarde, et n'a pas à être valable sur tout $U$ (pensez à $X(x)=x^2$ : la pente $2x$ est bornée sur toute boule, pas sur $\R$). « En la seconde variable » : on ne demande rien en $t$ au-delà de la continuité de $X$, mais la constante $k$ doit être **la même** pour tous les $t$ d'un voisinage de $t_0$.

Contre-image : $X(x)=2|x|^{1/2}$ a une tangente verticale en $0$ ; près de $0$, deux points très proches reçoivent des flèches dont l'écart est de l'ordre de $\sqrt{|x_1-x_2|}\gg|x_1-x_2|$ : l'étirement est « infini » et l'unicité tombe ([[ch07-peano-non-unicite]]).

Rappel (poly, p. 115) : une application $f$ entre espaces métriques est **$k$-lipschitzienne** si $d(f(x_1),f(x_2))\le k\,d(x_1,x_2)$ pour tous $x_1,x_2$ ; un **voisinage** d'un point est un ensemble contenant un ouvert qui contient ce point.

## Énoncé

**Définition (poly, section VII.2, p. 128).** Soit $X : I\times U\to E$ un champ de vecteurs dépendant du temps ([[ch07-champ-vecteurs-courbe-integrale-def]]) sur un ouvert $U$ d'un espace de Banach $E$. L'hypothèse « **$X$ localement lipschitzien en la seconde variable** » signifie que quel que soit $t_0\in I$, quel que soit $x_0\in U$, il existe un voisinage $J_0$ de $t_0$ dans $I$, un voisinage $U_0$ de $x_0$ dans $U$ et une constante $k\ge0$ tels que quels que soient $t\in J_0$ et $x_1,x_2\in U_0$,
$$
\|X(t,x_1)-X(t,x_2)\|_E\le k\,\|x_1-x_2\|_E.
$$

*Autrement dit :* pour tout $(t_0,x_0)$, il existe un voisinage « boîte » $J_0\times U_0$ de $(t_0,x_0)$ et un $k\ge0$ tels que, pour chaque $t\in J_0$ fixé, l'application partielle $x\mapsto X(t,x)$ soit $k$-lipschitzienne sur $U_0$, **avec le même $k$ pour tous les $t\in J_0$**. (Le poly écrit « un voisinage $U_0$ de $x$ » : lire « de $x_0$ ».)

On dit que $X$ est **$k$-lipschitzien en la seconde variable** sur une partie $A\subset I\times U$ si l'inégalité ci-dessus vaut pour tous $(t,x_1),(t,x_2)\in A$.

## Hypothèses

### H1 — Uniformité en $t\in J_0$ de la constante $k$

**Rôle.** Dans la preuve de Cauchy-Lipschitz, on intègre en temps : $\big\|\int_{t_0}^t\big(X(s,\varphi_1(s))-X(s,\varphi_2(s))\big)ds\big\|\le k\,|t-t_0|\,\|\varphi_1-\varphi_2\|_\infty$ n'est possible que si la **même** constante $k$ majore toutes les applications partielles $X(s,\cdot)$ pour $s$ entre $t_0$ et $t$ ([[ch07-lemme-operateur-integral]]).

**Si on la retire.** « Lipschitzien en $x$ pour chaque $t$ fixé » est strictement plus faible : voir l'exemple 3 ci-dessous ($X(t,x)=t\sin(x/t^2)$), continu, lipschitzien en $x$ pour chaque $t$, mais avec une constante $1/|t|$ qui explose quand $t\to0$ ; il n'est pas localement lipschitzien en la seconde variable au sens du poly.

### H2 — Caractère local

**Rôle.** La constante $k$ (et la boîte $J_0\times U_0$) dépendent de $(t_0,x_0)$ : c'est tout ce dont la preuve de [[ch07-cauchy-lipschitz]] a besoin, puisqu'elle ne travaille que sur une petite boîte $[\tau_0-2a';\tau_0+2a']\times\bar B(x_0,2a)$ ([[ch07-restriction-domaine-c1-lipschitz]]). Demander une constante globale sur $I\times U$ exclurait des champs aussi simples que $X(x)=x^2$.

**Si on la retire.** Si l'on exige $k$ global, on obtient une hypothèse plus forte (champ **lipschitzien** en la seconde variable), vraie pour les champs linéaires $X(t,x)=A(t)x$ avec $\|A(t)\|$ bornée, fausse pour $x^2$ ; les conclusions locales du chapitre n'en ont pas besoin, mais une constante globale donne davantage : par exemple, pour un champ $k$-lipschitzien en la seconde variable sur tout son domaine, deux solutions issues de $x_1$ et $x_2$ au même instant $t_0$ vérifient $\|y_1(t)-y_2(t)\|\le\|x_1-x_2\|\,e^{k|t-t_0|}$ (lemme de Gronwall, Exercices VII.4.1 et VII.4.2, p. 137), et, si $U=E$, les solutions sont définies sur tout $I$ : Gronwall interdit l'explosion en temps fini (croissance au plus exponentielle de $\|\alpha(t)\|$ ; résultat classique, hors poly).

### H3 — Aucune régularité en $t$ au-delà de la continuité

**Rôle.** La variable $t$ n'intervient dans la preuve que par une intégrale : la continuité de $X$ (déjà exigée dans la définition d'un champ) suffit à donner un sens à $\int X(s,\varphi(s))\,ds$ et à borner $\|X\|$ sur une boîte compacte.

**Si on la retire.** Si $X$ n'est pas continue en $t$, l'équation intégrale (VII.2.2) peut encore avoir un sens (théorie de Carathéodory, hors programme) mais la solution n'est plus $C^1$ ; dans le cadre du poly, un champ est continu par définition.

## Exemples

* **Le contre-exemple de référence.** $X(x)=2|x|^{1/2}$ sur $U=E=\R$ (champ autonome). En $x_0=0$ : pour $h>0$, $\dfrac{|X(h)-X(0)|}{|h-0|}=\dfrac{2\sqrt h}{h}=\dfrac{2}{\sqrt h}\xrightarrow[h\to0^+]{}+\infty$ ; aucun $k$ ne convient sur aucun voisinage de $0$ : $X$ **n'est pas** localement lipschitzien en $0$. En revanche, en tout $x_0\ne0$, $X$ est $C^1$ au voisinage de $x_0$ ($X'(x)=\mathrm{signe}(x)/\sqrt{|x|}$), donc localement lipschitzien ([[ch07-restriction-domaine-c1-lipschitz]]). La perte d'unicité n'a lieu qu'en $0$ ([[ch07-peano-non-unicite]]).

* **Lipschitzien sans être $C^1$ ; localement sans être globalement.** $X(x)=|x|$ est $1$-lipschitzien sur $\R$ (inégalité triangulaire $\big||x_1|-|x_2|\big|\le|x_1-x_2|$) mais n'est pas dérivable en $0$ : l'hypothèse de Cauchy-Lipschitz est strictement plus faible que $C^1$. Le champ $X(t,x)=t\,x^2$ sur $\R\times\R$ est localement lipschitzien en la seconde variable : autour de $(t_0,x_0)$, sur $J_0=[t_0-1;t_0+1]$ et $U_0=B(x_0,1)$,
$$
|t\,x_1^2-t\,x_2^2|=|t|\,|x_1+x_2|\,|x_1-x_2|\le(|t_0|+1)\,(2|x_0|+2)\,|x_1-x_2|,
$$
soit $k=2(|t_0|+1)(|x_0|+1)$ ; mais il n'est pas lipschitzien en $x$ sur $\R$ tout entier (le rapport $|x_1+x_2|$ n'est pas borné).

* **Lipschitzien pour chaque $t$ fixé, mais pas localement lipschitzien en la seconde variable.** Posons $X(t,x)=t\sin(x/t^2)$ pour $t\ne0$ et $X(0,x)=0$, sur $\R\times\R$. $X$ est continue (pour $t\to0$, $|X(t,x)|\le|t|\to0$ uniformément en $x$). Pour $t\ne0$ fixé, $x\mapsto X(t,x)$ est dérivable de dérivée $\frac{1}{t}\cos(x/t^2)$, donc $\frac1{|t|}$-lipschitzienne ; pour $t=0$ elle est nulle. Pourtant, en $(0,x_0)$, aucune constante uniforme n'existe : pour $t\ne0$ petit, soit $n=\lfloor x_0/(2\pi t^2)\rfloor$, $x_1=2\pi nt^2\in[x_0-2\pi t^2;x_0]$ et $x_2=x_1+\frac{\pi}{2}t^2$ ; alors $X(t,x_1)=t\sin(2\pi n)=0$, $X(t,x_2)=t\sin(2\pi n+\frac\pi2)=t$, et
$$
\frac{|X(t,x_1)-X(t,x_2)|}{|x_1-x_2|}=\frac{|t|}{\pi t^2/2}=\frac{2}{\pi|t|}\xrightarrow[t\to0]{}+\infty,
$$
alors que $x_1,x_2$ sont aussi proches de $x_0$ que l'on veut. L'uniformité en $t$ de la définition est donc une vraie exigence.

## Pièges

* > ⚠️ « Localement lipschitzien en la seconde variable » exige **une même constante $k$ pour tous les $t$ d'un voisinage de $t_0$** : ce n'est pas « lipschitzien en $x$ pour chaque $t$ » (exemple 3).
* Ce n'est pas non plus « lipschitzien sur $U$ » : la constante peut dépendre du point et exploser à l'infini ($x^2$) ; pour les théorèmes locaux du chapitre, le local suffit.
* Critère pratique : un champ de classe $C^1$ (ou seulement à dérivée partielle $\partial X/\partial x$ continue) est localement lipschitzien en la seconde variable par les accroissements finis ([[ch07-restriction-domaine-c1-lipschitz]]). La réciproque est fausse ($|x|$). Inversement, « non dérivable » n'implique pas « non lipschitzien ».
* La constante $k\ge0$ peut être nulle (champ ne dépendant pas de $x$ : $X(t,x)=g(t)$), et dans la preuve de Cauchy-Lipschitz on la remplace par $\max(k,1)>0$ sans perte.
* L'hypothèse porte sur $x$ seulement : la continuité en $(t,x)$ reste requise par la définition de champ de vecteurs ([[ch07-champ-vecteurs-courbe-integrale-def]]) ; être lipschitzien en $x$ ne donne aucune régularité en $t$.
* Coquille du poly (p. 128) : « un voisinage $U_0$ de $x$ » signifie « de $x_0$ ».
* Sans cette hypothèse, l'existence peut subsister (Peano, en dimension finie) mais pas l'unicité : $\alpha'=2|\alpha|^{1/2}$, $\alpha(0)=0$ ([[ch07-peano-non-unicite]]).
