---
id: ch07-equation-autonome-def
type: definition
chapter: 7
title: Équations autonomes (champ indépendant du temps)
ref: Remarque VII.2.6
page: 129
importance: 2
depends: [ch07-champ-vecteurs-courbe-integrale-def, ch07-localement-lipschitzien-def]
tags: [autonome, champ-de-vecteurs, independant-du-temps, cauchy-lipschitz, translation-temps]
---
## Intuition

> 💡 Un champ de vecteurs dépendant du temps est une « carte des vents » qui change d'heure en heure. Un champ **autonome** est une carte des vents figée : la flèche attachée au point $x$ est la même à tout instant. Une particule lâchée en $x$ suit alors toujours la même trajectoire, quelle que soit l'heure de départ : seule compte la durée écoulée depuis le départ.

Le cadre général du chapitre ([[ch07-champ-vecteurs-courbe-integrale-def]]) est celui d'une application continue $X : I\times U\to E$ ($I$ intervalle ouvert de $\R$, $U$ ouvert d'un espace de Banach $E$) et de l'équation $\alpha'(t)=X(t,\alpha(t))$. Le cas autonome est celui où le membre de droite ne fait pas intervenir $t$ : $\alpha'(t)=X(\alpha(t))$. C'est le cadre de la mécanique (forces ne dépendant que de la position), du lemme des bouts ([[ch07-lemme-des-bouts]]) et de la structure de groupe à un paramètre du flot ([[ch07-groupe-un-parametre]]).

## Énoncé

**Définition (poly, Remarque VII.2.6, p. 129).** Soient $E$ un espace de Banach et $U$ un ouvert de $E$. Un **champ de vecteurs** (sous-entendu : *autonome*, ou *indépendant du temps*) sur $U$ est une application continue
$$
X : U\longrightarrow E .
$$
L'équation différentielle associée,
$$
\alpha'(t)=X(\alpha(t)),
$$
est dite **autonome**. Une **courbe intégrale** de $X$ est une application $\alpha : J\to U$ de classe $C^1$, définie sur un intervalle ouvert $J$ de $\R$, telle que $\alpha'(t)=X(\alpha(t))$ pour tout $t\in J$ ; elle est de **condition initiale** $(t_0,x)\in J\times U$ si $\alpha(t_0)=x$.

On se ramène au cadre général du chapitre en prenant $I=\R$ et en posant
$$
\tilde X : \R\times U\longrightarrow E,\qquad \tilde X(t,x)=X(x) :
$$
les courbes intégrales de $X$ sont exactement les courbes intégrales du champ dépendant du temps $\tilde X$ au sens de [[ch07-champ-vecteurs-courbe-integrale-def]]. Le théorème de Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]) s'applique dès que $X$ est **localement lipschitzien** sur $U$ (c'est l'hypothèse de [[ch07-localement-lipschitzien-def]], sans variable de temps) : pour tout $x_0\in U$, il existe un voisinage $U_0$ de $x_0$ dans $U$ et une constante $k\ge0$ tels que
$$
\norm{X(x_1)-X(x_2)}_E\le k\,\norm{x_1-x_2}_E\qquad (x_1,x_2\in U_0).
$$

## Hypothèses

### H1 — $X$ est continue sur l'ouvert $U$

**Rôle.** C'est la définition même d'un champ de vecteurs dans ce cours. La continuité garantit que $t\mapsto X(\alpha(t))$ est continue, donc que l'équation intégrale équivalente $\alpha(t)=x+\int_{t_0}^tX(\alpha(s))\,ds$ ([[ch07-equation-integrale]]) a un sens, et c'est elle qui fournit la borne $\ell$ du lemme [[ch07-lemme-operateur-integral]].

**Si on la retire.** On sort du cadre et l'existence peut tomber. Sur $U=\R$, soit $X(x)=1$ si $x\ge0$ et $X(x)=-1$ si $x<0$. Une courbe intégrale $\alpha$ de condition initiale $(0,0)$ devrait vérifier $\alpha'(0)=X(0)=1$, donc $\alpha(t)<0$ pour $t<0$ proche de $0$, donc $\alpha'(t)=-1$ pour ces $t$ : $\alpha'$ ne serait pas continue en $0$, ce qui contredit $\alpha$ de classe $C^1$. Il n'y a **aucune** solution.

### H2 — La convention $I=\R$

**Rôle.** Le champ $\tilde X(t,x)=X(x)$ est défini pour tout temps ; les énoncés du chapitre ([[ch07-autonome-i-egal-r-remarque]]) prennent alors $I=\R$ et, pour le flot, $\tau_0=0$ ([[ch07-flot-global-def]]).

**Si on la retire.** Hypothèse de confort : on peut toujours restreindre $\tilde X$ à $I\times U$ pour un intervalle $I$ plus petit. Attention toutefois : « défini pour tout temps » concerne le **champ**, pas les **solutions** (voir l'exemple $\alpha'=\alpha^2$ ci-dessous).

### H3 — $X$ localement lipschitzien (pour appliquer Cauchy-Lipschitz)

**Rôle.** Si $X$ est localement lipschitzien sur $U$, alors $\tilde X$ est localement lipschitzien en la seconde variable, uniformément en $t$ (il n'en dépend pas) : les hypothèses de [[ch07-cauchy-lipschitz]] sont satisfaites avec la même constante $k$. C'est automatique si $X$ est de classe $C^1$ ([[ch07-restriction-domaine-c1-lipschitz]]).

**Si on la retire.** $X(x)=2\abs{x}^{1/2}$ sur $U=\R$ est continue mais pas lipschitzienne au voisinage de $0$ : $\alpha_1(t)=0$ et $\alpha_2(t)=\operatorname{signe}(t)\,t^2$ sont deux courbes intégrales distinctes de condition initiale $(0,0)$ ([[ch07-peano-non-unicite]]). L'existence subsiste (théorème de Peano), l'unicité non.

## Exemples

1. **Équation linéaire scalaire.** $E=U=\R$, $X(x)=\lambda x$ ($\lambda\in\R$ fixé). $X$ est $\abs\lambda$-lipschitzienne. La courbe intégrale de condition initiale $(t_0,x)$ est $\alpha(t)=x\,e^{\lambda(t-t_0)}$, définie sur $J=\R$ : $\alpha'(t)=\lambda x e^{\lambda(t-t_0)}=\lambda\alpha(t)$ et $\alpha(t_0)=x$. Elle ne dépend de $(t,t_0)$ qu'à travers la durée $t-t_0$ : c'est la marque des équations autonomes.

2. **Autonome n'implique pas « défini pour tout temps ».** $E=U=\R$, $X(x)=x^2$, de classe $C^\infty$ donc localement lipschitzien. Pour $x>0$, la courbe intégrale de condition initiale $(0,x)$ est
$$
\alpha(t)=\frac{x}{1-xt},\qquad t\in\,]-\infty\,;1/x[\,,
$$
car $\alpha'(t)=\dfrac{x^2}{(1-xt)^2}=\alpha(t)^2$ et $\alpha(0)=x$. Elle explose quand $t\to1/x$ : le champ est défini pour tout temps ($I=\R$), la solution ne l'est pas. On ne peut pas la prolonger au-delà de $1/x$ (l'intervalle de vie maximal est $]-\infty\,;1/x[$, voir [[ch07-courbe-integrale-maximale-def]]).

3. **Toute équation se rend autonome (au prix d'une dimension).** Soit $X : I\times U\to E$ un champ dépendant du temps. Posons $\tilde U=I\times U$, ouvert de l'espace de Banach $\R\times E$, et
$$
Z : \tilde U\to\R\times E,\qquad Z(s,x)=(1,\,X(s,x)).
$$
Si $\alpha$ est une courbe intégrale de $X$ de condition initiale $(t_0,x)$, alors $\beta(t)=(t,\alpha(t))$ vérifie $\beta'(t)=(1,X(t,\alpha(t)))=Z(\beta(t))$ et $\beta(t_0)=(t_0,x)$. Réciproquement, si $\beta=(\theta,\alpha)$ est une courbe intégrale de $Z$ avec $\beta(t_0)=(t_0,x)$, alors $\theta'=1$ et $\theta(t_0)=t_0$ donnent $\theta(t)=t$, puis $\alpha'(t)=X(t,\alpha(t))$. Le prix à payer : $Z$ n'est localement lipschitzien que si $X$ l'est en le **couple** $(s,x)$, alors que [[ch07-cauchy-lipschitz]] ne demande le caractère lipschitzien qu'en $x$. Par exemple $X(s,x)=\abs{s}^{1/2}$ est lipschitzienne en $x$ (elle n'en dépend pas) mais $Z$ n'est pas localement lipschitzien au voisinage de $s=0$.

## Pièges

* > ⚠️ **Autonome ne signifie pas « solutions définies sur $\R$ »** : $\alpha'=\alpha^2$ a des solutions qui explosent en temps fini. Le temps de vie infini demande une hypothèse supplémentaire, par exemple le lemme des bouts ([[ch07-lemme-des-bouts]]) ou un champ globalement lipschitzien.
* **Autonome ne signifie pas linéaire** : $X(x)=x^2$, $X(x)=\sin x$ sont autonomes.
* **Invariance par translation du temps.** Si $\alpha : J\to U$ est une courbe intégrale d'un champ autonome et $c\in\R$, alors $t\mapsto\alpha(t-c)$ est une courbe intégrale sur $J+c$ ([[ch07-translation-temps-autonome]]). C'est **faux** pour un champ dépendant du temps : pour $X(t,x)=2t$, $\alpha(t)=t^2$ est solution mais $t\mapsto\alpha(t-1)=(t-1)^2$ a pour dérivée $2(t-1)\ne2t$.
* **Trajectoires qui se croisent.** Pour un champ autonome localement lipschitzien, deux courbes intégrales dont les images (les *orbites* $\alpha(J)\subset U$) se rencontrent ont la **même** orbite : si $\alpha_1(t_1)=\alpha_2(t_2)$, la translatée $t\mapsto\alpha_2(t+t_2-t_1)$ a la même condition initiale que $\alpha_1$ à l'instant $t_1$, donc coïncide avec $\alpha_1$ ([[ch07-unicite-globale]]). Pour un champ **non** autonome, les orbites peuvent se croiser : pour $X(t,(x,y))=(\cos t,\sin t)$ sur $\R^2$, les solutions $\alpha_c(t)=(\sin t,-\cos t)+c$ décrivent des cercles de rayon $1$ centrés en $c$, qui se coupent pour des centres distincts (à des instants différents, sans contredire l'unicité).
* **Hypothèse lipschitzienne.** Pour un champ autonome, « localement lipschitzien en la seconde variable » se lit simplement « localement lipschitzien sur $U$ » ; c'est acquis si $X$ est $C^1$ ([[ch07-restriction-domaine-c1-lipschitz]]).
