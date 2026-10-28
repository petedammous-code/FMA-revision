---
id: ch07-flot-inverse
type: corollary
chapter: 7
title: "Inversibilité du flot : $F(t,s,F(s,t,x))=x$"
ref: Corollaire VII.3.8
page: 135
importance: 2
depends: [ch07-composition-flot, ch07-flot-global-def, ch07-courbe-integrale-maximale-def]
tags: [flot, inverse, bijection, retour-en-arriere, champ-dependant-du-temps]
---
## Intuition

> 💡 On peut **remonter le temps** le long d'une trajectoire. Si la particule partie de $x$ à l'instant $s$ est en $y$ à l'instant $t$, alors la particule qui est en $y$ à l'instant $t$ était en $x$ à l'instant $s$ : c'est la même trajectoire, lue à l'envers. En formule : $F(s,t,x)=y\iff F(t,s,y)=x$. Autrement dit l'application « transport de l'instant $s$ à l'instant $t$ », $\Phi_{s,t}=F(s,t,\cdot)$, est inversible, d'inverse $\Phi_{t,s}$.

C'est un cas particulier de la formule de composition ([[ch07-composition-flot]]) : faire une escale à l'instant $t$, puis revenir à l'instant $s$, c'est aller de $s$ à $s$, donc ne pas bouger. Il n'y a aucune hypothèse de réversibilité du champ : l'équation $\alpha'=X(t,\alpha)$ peut toujours être résolue vers le passé (la définition d'une courbe intégrale est sur un intervalle **ouvert** contenant l'instant initial).

Notations ([[ch07-flot-global-def]]) : $X : I\times U\to E$ est localement lipschitzien en la seconde variable ; $F(s,t,x)=\alpha_{s,x}(t)$ est la position à l'instant $t$ de la courbe intégrale maximale de condition initiale $(s,x)$, définie pour $t\in J_s(x)$ ([[ch07-courbe-integrale-maximale-def]]).

## Énoncé

**Corollaire (poly, Corollaire VII.3.8, p. 135).** Soit $F : D\to U$ le flot global d'un champ de vecteurs $X : I\times U\to E$ localement lipschitzien en la seconde variable. Pour $(s,x)\in I\times U$ et $t\in J_s(x)$ (de sorte que $F(s,t,x)$ est défini), on a $s\in J_t(F(s,t,x))$ et
$$
\text{(VII.3.2)}\qquad F(s,s,x)=x=F\big(t,\,s,\,F(s,t,x)\big),
$$
ou encore, pour $(s,x),(t,y)\in I\times U$ :
$$
F(s,t,x)=y\iff F(t,s,y)=x .
$$
(Le poly obtient (VII.3.2) en remplaçant, dans le Théorème VII.3.7, $t_0$ par $s$, $s$ par $t$ et $t$ par $s-t$.)

*Complément.* Pour $s,t\in I$, posons $U_{s,t}=\{x\in U\ ;\ t\in J_s(x)\}$ (domaine de $x\mapsto F(s,t,x)$). Alors $\Phi_{s,t} : U_{s,t}\to U_{t,s}$, $x\mapsto F(s,t,x)$, est une bijection d'inverse $\Phi_{t,s}$.

## Hypothèses

### H1 — $t\in J_s(x)$

**Rôle.** C'est la condition pour que $F(s,t,x)$ existe ; la preuve montre qu'alors $F(t,s,F(s,t,x))$ existe automatiquement (même courbe intégrale maximale, même intervalle).

**Si on la retire.** Pour $\alpha'=\alpha^2$ sur $\R$, $s=0$, $t=1$, $x=1$ : $J_0(1)=\,]-\infty\,;1[\not\ni1$ et $F(0,1,1)$ n'est pas défini. L'application $\Phi_{0,1}=F(0,1,\cdot)$ n'est définie que sur $U_{0,1}=\{x\ ;\ x<1\}$ : elle n'est pas une bijection de $U=\R$, seulement de $U_{0,1}$ sur $U_{1,0}=\{y\ ;\ -y<1\}=\,]-1\,;+\infty[$.

### H2 — $X$ localement lipschitzien en la seconde variable

**Rôle.** Existence du flot global et unicité, utilisée à travers [[ch07-composition-flot]].

**Si on la retire.** Le flot n'est pas défini ([[ch07-peano-non-unicite]]). Si l'on choisit arbitrairement une solution par condition initiale, le « retour en arrière » peut échouer : pour $\alpha'=2\abs\alpha^{1/2}$ sur $\R$, choisissons pour la condition initiale $(0,0)$ la solution nulle, de sorte que « $F(0,1,0)=0$ », et pour la condition initiale $(1,0)$ la solution $u\mapsto\operatorname{signe}(u-1)(u-1)^2$ (dérivée $2\abs{u-1}=2\abs{\alpha}^{1/2}$), de sorte que « $F(1,0,0)=-1\ne0$ ». Le sens « $\Rightarrow$ » de l'équivalence tombe.

## Idée de la preuve

Dans $F(t_0,s'+t',x)=F(s',s'+t',F(t_0,s',x))$ prendre $t_0=s$, $s'=t$, $t'=s-t$ : les hypothèses sont $t\in J_s(x)$ et $s\in J_s(x)$ (toujours vrai) ; la conclusion est $F(s,s,x)=F(t,s,F(s,t,x))$, et $F(s,s,x)=x$ par définition.

## Preuve

**Première égalité.** Par définition, $F(s,s,x)=\alpha_{s,x}(s)=x$, puisque $\alpha_{s,x}$ est de condition initiale $(s,x)$ ; et $(s,s,x)\in D$ car $s\in J_s(x)$.

**Seconde égalité.** Appliquons le théorème de composition ([[ch07-composition-flot]]) au point $(t_0,x)$ avec $t_0=s$, à l'instant d'escale $s'=t$ et à la durée $t'=s-t$. Ses hypothèses sont : $s'=t\in J_s(x)$, vrai par (H1), et $s'+t'=t+(s-t)=s\in J_s(x)$, toujours vrai. Sa conclusion s'écrit
$$
F(s,\underbrace{t+(s-t)}_{=\,s},x)=F\big(t,\,t+(s-t),\,F(s,t,x)\big),\qquad\text{soit}\qquad x=F(s,s,x)=F\big(t,s,F(s,t,x)\big).
$$
Le théorème garantit aussi que le membre de droite est défini, c'est-à-dire $s\in J_t(F(s,t,x))$ (de fait, son complément donne $J_t(F(s,t,x))=J_s(x)$).

**Équivalence.** Si $F(s,t,x)=y$ (ce qui suppose $t\in J_s(x)$), alors $F(t,s,y)=F(t,s,F(s,t,x))=x$ d'après (VII.3.2). Réciproquement, si $F(t,s,y)=x$ (ce qui suppose $s\in J_t(y)$), le même raisonnement, les rôles de $(s,x)$ et $(t,y)$ étant échangés, donne $F(s,t,x)=F(s,t,F(t,s,y))=y$.

**Complément.** Si $x\in U_{s,t}$, alors $y=F(s,t,x)$ vérifie $s\in J_t(y)$, c'est-à-dire $y\in U_{t,s}$ : $\Phi_{s,t}$ envoie $U_{s,t}$ dans $U_{t,s}$, et (VII.3.2) dit $\Phi_{t,s}\circ\Phi_{s,t}=\id_{U_{s,t}}$. En échangeant $s$ et $t$ : $\Phi_{s,t}\circ\Phi_{t,s}=\id_{U_{t,s}}$. Donc $\Phi_{s,t} : U_{s,t}\to U_{t,s}$ est une bijection d'inverse $\Phi_{t,s}$. $\square$

*Remarque.* Les ensembles $U_{s,t}$ sont ouverts et $\Phi_{s,t}$ est de classe $C^p$ si $X$ l'est ([[ch07-flot-global-ouvert-regulier]]) : $\Phi_{s,t}$ est alors un $C^p$-difféomorphisme de l'ouvert $U_{s,t}$ sur l'ouvert $U_{t,s}$. Dans le cas autonome, $\Phi_{s,t}=F_{t-s}$ et l'on retrouve $F_{-t}\circ F_t=\id$ ([[ch07-groupe-un-parametre]]).

## Preuve à trous

$F(s,s,x)=x$ par définition de la condition initiale. Pour la seconde égalité, on applique la formule de composition $F(t_0,s'+t',x)=F(s',s'+t',F(t_0,s',x))$ avec <trou indice="quelles valeurs de $t_0,s',t'$ font apparaître $F(s,t,x)$ à l'intérieur et un retour à l'instant $s$ ?">$t_0=s$, $s'=t$, $t'=s-t$</trou>. Les hypothèses à vérifier sont <trou indice="deux appartenances à $J_s(x)$">$t\in J_s(x)$ (hypothèse) et $t+(s-t)=s\in J_s(x)$ (toujours vrai)</trou>. On obtient $F(s,s,x)=F(t,s,F(s,t,x))$, soit (VII.3.2). Si $F(s,t,x)=y$, alors $F(t,s,y)=x$ ; la réciproque s'obtient <trou indice="symétrie de l'énoncé">en échangeant les rôles de $(s,x)$ et $(t,y)$</trou>. $\square$

## Exemples

**Exemple 1 ($\alpha'=\alpha^2$).** $F(s,t,x)=\dfrac{x}{1-(t-s)x}$ pour $(t-s)x<1$ ([[ch07-flot-global-def]]). Posons $y=F(s,t,x)$. Alors $F(t,s,y)=\dfrac{y}{1-(s-t)y}=\dfrac{y}{1+(t-s)y}$ et
$$
\frac{y}{1+(t-s)y}=\frac{\dfrac{x}{1-(t-s)x}}{1+\dfrac{(t-s)x}{1-(t-s)x}}=\frac{x}{1-(t-s)x+(t-s)x}=x .
$$
On vérifie aussi $s\in J_t(y)$ : il faut $(s-t)y<1$, soit $-\dfrac{(t-s)x}{1-(t-s)x}<1$, soit (le dénominateur étant $>0$) $-(t-s)x<1-(t-s)x$, toujours vrai.

**Exemple 2 ($\alpha'=\alpha+t$).** $F(s,t,x)=(x+s+1)e^{t-s}-t-1$ sur $\R^3$. Avec $y=F(s,t,x)$ : $y+t+1=(x+s+1)e^{t-s}$, donc
$$
F(t,s,y)=(y+t+1)e^{s-t}-s-1=(x+s+1)e^{t-s}e^{s-t}-s-1=x .
$$
Ici $\Phi_{s,t} : \R\to\R$, $x\mapsto e^{t-s}x+(s+1)e^{t-s}-t-1$, est une bijection affine, d'inverse $\Phi_{t,s}$ : on lit directement que la pente de $\Phi_{t,s}$ est $e^{s-t}=1/e^{t-s}$.

**Exemple 3 (transport d'une densité, idée de l'exercice VII.4.12).** Si $f_0 : U\to\R$ est une fonction donnée à l'instant $0$ et qu'on la transporte par le flot, la valeur en $x$ à l'instant $t$ s'obtient en remontant la trajectoire jusqu'à l'instant $0$ : $f(t,x)=f_0(F(t,0,x))$, où $F(t,0,x)$ est le point d'où vient $x$ — c'est exactement $\Phi_{0,t}^{-1}(x)=\Phi_{t,0}(x)$ d'après le corollaire. Pour $\alpha'=\alpha$ ($F(s,t,x)=xe^{t-s}$) et $f_0(x)=x^2$ : $f(t,x)=x^2e^{-2t}$.

## Pièges

* > ⚠️ Pour inverser, on échange **les deux arguments de temps** : l'inverse de $F(s,t,\cdot)$ est $F(t,s,\cdot)$, pas $F(s,-t,\cdot)$ ni $F(-s,-t,\cdot)$. Dans le cas autonome seulement, $F(s,t,\cdot)=F_{t-s}$ et l'inverse est $F_{s-t}=F_{-(t-s)}$.
* $\Phi_{s,t}=F(s,t,\cdot)$ n'est en général **pas** définie sur tout $U$ : c'est une bijection de l'ouvert $U_{s,t}$ sur l'ouvert $U_{t,s}$ (H1). Les deux ensembles peuvent être différents (exemple 1 avec $s=0$, $t=1$ : $]-\infty\,;1[\to\,]-1\,;+\infty[$).
* L'équivalence $F(s,t,x)=y\iff F(t,s,y)=x$ dit que la relation « $(s,x)$ et $(t,y)$ sont sur la même courbe intégrale maximale » est symétrique ; elle est aussi transitive ([[ch07-composition-flot]]) : les graphes des courbes intégrales maximales partitionnent $I\times U$.
* Ne pas en déduire que $F(s,t,\cdot)$ préserve une quelconque mesure ou norme : c'est une bijection, pas une isométrie (exemple 2 : dilatation de rapport $e^{t-s}$).
