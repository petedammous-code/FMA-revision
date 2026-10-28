---
id: rfx-edo-globale-explosion
type: reflexe
situation: Montrer qu'une solution maximale est définie sur tout R (temps de vie infini), ou au contraire qu'elle explose en temps fini
chapters: [7, 9, 8]
---
## Situation

On a une solution maximale $\alpha:J=\,]a,b[\,\to U$ de $\alpha'=X(t,\alpha)$ (existence et unicité déjà acquises, [[rfx-edo-existence-unicite]]). L'énoncé demande : « montrer que la solution est définie sur $\R$ », « sur $[0,+\infty[$ », « montrer que le champ est complet », « que le flot est défini sur $\R\times U$ », ou au contraire « montrer que $b<+\infty$ », « que la solution explose en temps fini », « majorer le temps de vie ». Indices dans l'énoncé : une quantité $H$ à « montrer constante », une fonction $V$ « décroissante le long des trajectoires », une majoration $\norm{X(t,x)}\le a\norm{x}+c$, une inégalité du type $u'\ge u^2$.

## Options

### [x] Lemme des bouts (confinement dans un compact) — [[ch07-lemme-des-bouts]]
**Quand.** Le champ est autonome $X:U\to E$, localement lipschitzien (par exemple $C^1$), et on sait montrer que $\alpha([\tau_0,b[)$ reste dans un **compact $K$ de $U$**. Alors $b=+\infty$ (poly, Théorème VII.3.10, p. 136). Même chose vers le passé avec $a$. Sources de compact : une **intégrale première coercive** ($H(\alpha(t))=H(x_0)$ et $\{H\le c\}$ compact), une **fonction de Lyapunov** ($V(\alpha(t))$ décroissante et $\{V\le c\}$ compact : futur seulement), un ensemble **invariant** compact (sphère, carré dont le champ rentre), une sous-variété compacte à laquelle $X$ est tangent ([[rfx-edo-champ-tangent]]).
**Justification.** Par compacité, le temps d'existence local $\epsilon$ est uniforme sur $K$ : on peut toujours relancer la solution d'une durée $\epsilon$ depuis $\alpha(b-\epsilon)\in K$.
**Pièges.** Le compact doit être inclus dans $U$, pas seulement dans $E$ (sinon la solution peut atteindre le bord de $U$). Le lemme est **unilatéral**. En dimension finie, « fermé borné » suffit ; en dimension infinie, non. Pour un champ **dépendant du temps** sur $I\times U$, la même preuve marche avec un compact $[\tau_0,b]\times K$ de $I\times U$ (recouvrir par les voisinages du Théorème VII.2.1, où $\epsilon$ est uniforme), la conclusion devient $b=\sup I$ ; si $X$ est $C^1$ en $(t,x)$, on peut aussi ajouter le temps comme variable : $Y(s,x)=(1,X(s,x))$ est autonome sur $I\times U$.

### [x] Gronwall et croissance au plus linéaire — [[ch07-equation-integrale]]
**Quand.** $\norm{X(t,x)}\le a\norm{x}+c$ sur $I\times E$ entier ($U=E$ de dimension finie) : champs linéaires, affines, globalement lipschitziens, ou bornés. On écrit la forme intégrale $\alpha(t)=x_0+\int_{\tau_0}^tX(s,\alpha(s))\,ds$, d'où, sur $[\tau_0,\tau_0+T]\cap J$, $\norm{\alpha(t)}\le(\norm{x_0}+cT)+a\int_{\tau_0}^t\norm{\alpha(s)}\,ds$, puis par le **lemme de Gronwall** (poly, Exercice VII.4.1, p. 137) $\norm{\alpha(t)}\le(\norm{x_0}+cT)\,e^{aT}$. La solution est bornée sur tout intervalle borné, donc reste dans un compact, donc $J=I$ par le lemme des bouts.
**Justification.** Gronwall : $u\le b+\int_0^ta\,u$ avec $b$ constante et $u,a\ge0$ continues entraîne $u(t)\le b\exp\big(\int_0^ta\big)$.
**Pièges.** Il faut redémontrer Gronwall s'il est demandé (poser $v(t)=\int_0^ta u$, étudier $\big(v e^{-\int_0^ta}\big)'$). Le contrôle doit valoir sur **tout** $E$ : une croissance linéaire sur une boule ne dit rien.

### [x] Explosion par comparaison avec une équation de Riccati — [[ch07-courbe-integrale-maximale-def]]
**Quand.** On soupçonne $b<+\infty$ : champ à croissance surlinéaire ($x^2$, $x^3$, $\norm{x}^2x$). On cherche une quantité scalaire $u(t)=\varphi(\alpha(t))$ (une composante, $\norm{\alpha}^2$, l'énergie) vérifiant $u'\ge c\,u^{1+\delta}$ avec $u(\tau_0)>0$, $c,\delta>0$. Alors $\big(u^{-\delta}\big)'=-\delta u'u^{-1-\delta}\le-c\delta$, donc $u(t)^{-\delta}\le u(\tau_0)^{-\delta}-c\delta(t-\tau_0)$, ce qui est impossible au-delà de $T^*=\tau_0+\frac{1}{c\delta\,u(\tau_0)^\delta}$ : donc $b\le T^*$.
**Justification.** Si $b>T^*$, la solution serait continue (donc bornée) au voisinage de $T^*$, alors que $u(t)\to+\infty$ quand $t\to T^{*-}$.
**Pièges.** Justifier que $u$ reste **strictement positive** sur $[\tau_0,b[$ avant de diviser (souvent $u'\ge0$). Ne pas confondre « $b<+\infty$ » avec « $\alpha\to\infty$ » : si $U\ne E$, la solution peut aussi s'arrêter en s'approchant du bord de $U$. La contraposée du lemme des bouts dit seulement : si $b<+\infty$, $\alpha([\tau_0,b[)$ n'est contenu dans aucun compact de $U$.

### [ ] Cauchy–Lipschitz local — [[ch07-cauchy-lipschitz]]
**Pourquoi ce n'est pas l'outil ici.** Il fournit une solution sur $]t_0-\epsilon,t_0+\epsilon[$ avec $\epsilon$ dépendant de bornes **locales** de $X$ : aucune information sur $b$.
**Quand il le serait.** Pour la question précédente (existence et unicité), ou à l'intérieur de la preuve du lemme des bouts (uniformité de $\epsilon$ sur un compact).

### [x] Flot complet sur une sous-variété compacte — [[ch09-flot-complet-compacte]]
**Quand.** On dispose d'une sous-variété **compacte** $S\subset U$ (sphère, tore, $\mathrm{SO}(n)$, niveau compact d'une intégrale première régulière) à laquelle le champ **autonome** et localement lipschitzien est **tangent** ($X(x)\in T_xS$ pour $x\in S$), et la condition initiale est dans $S$. Alors le flot du champ tangent est défini sur $\R\times S$ (poly, Théorème IX.8.9, p. 175) ; comme $S$ est fermée, la courbe intégrale ambiante issue de $x_0\in S$ reste dans $S$ ([[ch09-courbe-integrale-reste-dans-sous-variete-fermee]]) et coïncide avec celle du champ tangent : elle est définie sur $\R$.
**Justification.** C'est le lemme des bouts appliqué avec le compact $K=S$, dans les deux sens du temps.
**Pièges.** La conclusion ne porte que sur les conditions initiales **dans $S$** ; pour un champ quelconque sur $\R^N$ sans ensemble invariant compact, il ne s'applique pas. Vérifier la tangence sur $S$ entier (par exemple $\langle X(x),x\rangle=0$ sur la sphère, [[rfx-edo-champ-tangent]]).

## Démarche

1. Si une **formule explicite** est accessible (variables séparables, équation linéaire scalaire), alors la calculer et lire $J$ ; justifier la maximalité (la formule n'est pas prolongeable : elle tend vers l'infini ou vers le bord de $U$).
2. Si $X$ est **à croissance au plus linéaire** sur $E$ entier (linéaire, affine, globalement lipschitzien, borné), alors Gronwall, puis lemme des bouts : $J=I$.
3. Sinon, chercher une **quantité conservée** $H$ : calculer $\frac{d}{dt}H(\alpha(t))=dH_{\alpha(t)}\big(X(\alpha(t))\big)$. Si elle est nulle et si $\{x\in U : H(x)\le H(x_0)\}$ est compact (et inclus dans $U$), alors lemme des bouts **dans les deux sens** : $J=\R$. Pour un système mécanique $x''=-\nabla V(x)$, l'énergie $\frac12\norm{x'}^2+V(x)$ ([[ch08-energie-conservee]]) est coercive si $V$ est minorée et tend vers $+\infty$ à l'infini.
4. Si l'on n'a qu'une quantité **décroissante** $V$, alors conclure seulement $b=+\infty$ (futur).
5. Si l'on soupçonne une explosion, alors chercher une inégalité de Riccati $u'\ge cu^{1+\delta}$ et majorer $b$ explicitement.
6. Pour un champ **dépendant du temps**, utiliser la version non autonome (compact de $I\times U$), et conclure $J=I$ (et non $J=\R$ si $I\ne\R$).

## Pièges

* Compact de $E$ au lieu de compact de $U$ : $X=-1$ sur $U=\,]0,+\infty[$ donne $\alpha(t)=1-t$, bornée, mais $b=1$.
* Conclure $J=\R$ à partir d'une fonction seulement **décroissante** : on n'a que le futur ($X(x)=-x^3$ : $\inf J(x_0)=-\frac{1}{2x_0^2}$).
* Oublier de prouver le confinement : « la solution est bornée » doit être **démontré** (intégrale première, Gronwall).
* Appliquer Gronwall à $\norm{\alpha}$ sans passer par la forme intégrale (on ne dérive pas $\norm{\alpha(t)}$ là où $\alpha=0$).
* Diviser par $u$ dans la comparaison sans avoir vu que $u>0$.
* Réciproque fausse : globale n'implique pas bornée ($\alpha(t)=t$ pour $X=1$).

## Mini-exemple

*Énoncé.* (a) Montrer que les solutions de $x'=y$, $y'=-x-x^3$ sont définies sur $\R$. (b) Montrer que la solution de $x'=x^2+t^2$, $x(0)=1$, a un temps de vie $b\le1$.

*Solution.* (a) Le champ $(y,-x-x^3)$ est $C^\infty$ sur $U=\R^2$. Avec $H(x,y)=\frac{y^2}2+\frac{x^2}2+\frac{x^4}4$ : $\frac{d}{dt}H=yy'+(x+x^3)x'=y(-x-x^3)+(x+x^3)y=0$. Donc $\alpha(t)\in K=\{H\le H(x_0,y_0)\}$, fermé et contenu dans le disque de rayon $\sqrt{2H(x_0,y_0)}$ car $H\ge\frac{x^2+y^2}{2}$ : $K$ est compact dans $U$. Le lemme des bouts, vers le futur et vers le passé, donne $J=\R$.
(b) Sur $[0,b[$, $x'\ge0$ donc $x\ge1>0$, puis $\big(-\frac1x\big)'=\frac{x'}{x^2}\ge1$, d'où $\frac1{x(t)}\le1-t$. Si l'on avait $b>1$, $x$ serait continue en $1$ alors que $x(t)\ge\frac1{1-t}\to+\infty$ quand $t\to1^-$ : contradiction. Donc $b\le1$, et la solution est non bornée sur $[0,b[$.
