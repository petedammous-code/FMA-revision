---
id: ch07-lemme-des-bouts
type: theorem
chapter: 7
title: "Lemme des bouts : critère de temps de vie infini"
ref: Théorème VII.3.10
page: 136
importance: 3
depends: [ch07-existence-flot-local, ch07-unicite-globale, ch07-courbe-integrale-maximale-def, ch07-translation-temps-autonome, ch07-equation-autonome-def, ch07-autonome-i-egal-r-remarque]
tags: [lemme-des-bouts, temps-de-vie, explosion, compacite, solution-globale, autonome]
---
## Intuition

> 💡 **Une solution ne meurt pas sans raison.** Si la trajectoire d'un champ autonome s'arrête au temps fini $b$, ce n'est pas parce que « le temps manque » : c'est que la particule **s'échappe** — en dimension finie, elle part à l'infini ou elle va se coller au bord de l'ouvert $U$ (en dimension infinie, « ne rester dans aucun compact » est une condition plus faible). Tant qu'elle reste dans un compact $K$ de $U$, on peut toujours la relancer pour une durée fixe $\epsilon$, et donc la prolonger indéfiniment.

Le cœur de l'argument est l'**uniformité** : en chaque point $y$ de $K$, Cauchy-Lipschitz garantit une durée de vie $\epsilon_y>0$, et par compacité on peut choisir une durée $2\epsilon$ valable **pour tous** les points de $K$ à la fois. Si la solution vivait seulement jusqu'à $b<+\infty$, on la relancerait de son point à l'instant $b-\epsilon$ (qui est dans $K$) pour une durée $2\epsilon$, et elle irait jusqu'à $b+\epsilon$ : contradiction.

Usage : pour montrer qu'une solution est **globale** (définie pour tout $t\ge\tau_0$), on cherche une quantité conservée ou une estimation *a priori* qui la confine dans un compact.

Vocabulaire. Le champ est **autonome** : $X : U\to E$ ne dépend pas du temps ([[ch07-equation-autonome-def]]) ; on le voit comme un champ sur $\R\times U$ ($I=\R$, [[ch07-autonome-i-egal-r-remarque]]). $\alpha_{\tau_0,x_0} : J_{\tau_0}(x_0)\to U$ est la **courbe intégrale maximale** de condition initiale $(\tau_0,x_0)$, et $J_{\tau_0}(x_0)$ est un intervalle ouvert contenant $\tau_0$ ([[ch07-courbe-integrale-maximale-def]]).

## Énoncé

**Théorème (poly, Théorème VII.3.10, p. 136).** Soit $U$ un ouvert d'un espace de Banach $E$. Soit $X : U\to E$ un champ de vecteurs qui ne dépend pas du temps et lipschitzien. Soit $(\tau_0,x_0)\in\R\times U$ et soit $\alpha_{\tau_0,x_0}$ la courbe intégrale maximale de condition initiale $(\tau_0,x_0)$, définie sur l'intervalle $J_{\tau_0}(x_0)$. Soit $b$ la borne supérieure de $J_{\tau_0}(x_0)$ et supposons que $\alpha_{\tau_0,x_0}([\tau_0,b[)$ reste dans une partie compacte $K$ de $U$. Alors $b=+\infty$.

On a un énoncé analogue avec la borne inférieure de $J_{\tau_0}(x_0)$ : si $a=\inf J_{\tau_0}(x_0)$ et $\alpha_{\tau_0,x_0}(]a,\tau_0])\subset K$ compact de $U$, alors $a=-\infty$.

**Forme contraposée (usuelle).** Si $b<+\infty$, alors $\alpha_{\tau_0,x_0}([\tau_0,b[)$ n'est contenu dans aucun compact de $U$. (Plus fort, voir le complément de la preuve : pour tout compact $K\subset U$, $\alpha_{\tau_0,x_0}(t)\notin K$ pour $t$ assez proche de $b$ ; dans $E=U=\R^N$, cela donne $\norm{\alpha_{\tau_0,x_0}(t)}\to+\infty$ quand $t\to b^-$.)

## Hypothèses

### H1 — $X$ ne dépend pas du temps

**Rôle.** Deux usages : (i) la durée $\epsilon_y$ fournie par le flot local en $(0,y)$ ne dépend que du point $y$, ce qui permet d'obtenir un $\epsilon$ uniforme sur $K$ par compacité ; (ii) translater en temps une courbe intégrale donne une courbe intégrale ([[ch07-translation-temps-autonome]]), ce qui permet de « relancer » la solution à l'instant $b-\epsilon$ à partir d'une solution issue de l'instant $0$.

**Si on la retire.** Pour un champ $X : I\times U\to E$ avec $I\neq\R$, la conclusion tombe : $I=\,]-\infty,1[$, $U=\R$, $X=0$ ; la courbe maximale issue de $(0,0)$ est la constante $0$, qui reste dans le compact $\{0\}$, mais $J_0(0)=I$ et $b=1$. Pour un champ dépendant du temps défini sur $\R\times U$, la conclusion reste vraie mais la preuve change : on recouvre le compact $[\tau_0,b]\times K$ de $\R\times U$ par des flots locaux en des points $(t_i,x_i)$ (la version générale demande que $(t,\alpha(t))$ reste dans un compact de $I\times U$).

### H2 — $X$ lipschitzien

**Rôle.** Assure l'existence des flots locaux ([[ch07-existence-flot-local]]) et l'unicité globale ([[ch07-unicite-globale]]), donc l'existence de la courbe intégrale maximale. La preuve **n'utilise que cela** : l'énoncé reste vrai pour $X$ seulement **localement** lipschitzien (par exemple de classe $C^1$, [[ch07-restriction-domaine-c1-lipschitz]]) — c'est sous cette forme qu'on l'applique dans les exercices et dans les exemples ci-dessous. L'hypothèse « lipschitzien » est donc de confort. (Pour $X$ globalement lipschitzien sur $U=E$ tout entier, toutes les solutions sont d'ailleurs globales, par le lemme de Gronwall, exercice VII.4.1 : le lemme des bouts est surtout utile pour des champs localement lipschitziens ou lorsque $U\neq E$.)

**Si on la retire.** Sans aucune condition de Lipschitz, la courbe intégrale maximale n'est plus définie (non-unicité, [[ch07-peano-non-unicite]]) et l'énoncé perd son sens.

### H3 — $\alpha([\tau_0,b[)$ contenu dans un compact **de $U$**

**Rôle.** La compacité permet d'extraire un sous-recouvrement fini et donc un $\epsilon$ **uniforme** ; l'inclusion dans $U$ (et non seulement dans $E$) garantit qu'on peut appliquer le flot local en chaque point de $K$.

**Si on la retire.**
* *Pas de confinement :* $U=E=\R$, $X(x)=x^2$, $(\tau_0,x_0)=(0,1)$ : $\alpha(t)=\frac1{1-t}$, $b=1<+\infty$, et $\alpha([0,1[)=[1,+\infty[$ n'est contenu dans aucun compact.
* *Compact de $E$ mais pas de $U$ :* $U=\,]0,+\infty[$, $X(x)=-1$ (constant, donc lipschitzien), $(\tau_0,x_0)=(0,1)$ : $\alpha(t)=1-t$, $J_0(1)=\,]-\infty,1[$, $b=1$. La trajectoire $\alpha([0,1[)=\,]0,1]$ est dans le compact $[0,1]$ de $\R$, mais $[0,1]\not\subset U$ : elle s'approche du bord $0$ de $U$.
* *Borné n'est pas compact en dimension infinie :* dans un Banach de dimension infinie, une trajectoire bornée (et même restant loin du bord) ne vérifie pas forcément l'hypothèse ; le théorème ne permet alors pas de conclure, il faut une autre estimation.

### H4 — $b$ est la borne **supérieure** et le confinement porte sur $[\tau_0,b[$

**Rôle.** Le théorème est « unilatéral » : il ne regarde que le futur. On n'a besoin d'information que sur $[\tau_0,b[$, pas sur tout $J_{\tau_0}(x_0)$.

**Si on la retire.** On ne peut pas en déduire $J_{\tau_0}(x_0)=\R$ : pour $X(x)=-x^3$ sur $\R$ et $x_0\ne0$, le futur est confiné et $b=+\infty$, mais $\inf J_0(x_0)=-\frac1{2x_0^2}>-\infty$ (exemple 2).

## Idée de la preuve

Par compacité de $K$ et flots locaux, il existe $\epsilon>0$ tel que toute courbe intégrale issue d'un point de $K$ vive au moins sur $]-2\epsilon,2\epsilon[$. Si $b<+\infty$, on relance la solution depuis $\alpha(b-\epsilon)\in K$ : la courbe translatée vit jusqu'à $b+\epsilon$ et se recolle à $\alpha$, ce qui contredit la maximalité.

## Preuve

On voit $X$ comme le champ $(t,x)\mapsto X(x)$ sur $\R\times U$ ([[ch07-autonome-i-egal-r-remarque]]). Notons $\alpha=\alpha_{\tau_0,x_0}$ et $J=J_{\tau_0}(x_0)$.

**Étape 0 : translation en temps.** Si $\gamma : J'\to U$ est une courbe intégrale de $X$ et $c\in\R$, alors $t\mapsto\gamma(t-c)$, définie sur $J'+c=\{t : t-c\in J'\}$, est une courbe intégrale : sa dérivée en $t$ est $\gamma'(t-c)=X(\gamma(t-c))$, car $X$ ne dépend pas du temps ([[ch07-translation-temps-autonome]]).

**Étape 1 : un $\epsilon$ uniforme sur $K$.** Pour tout $x\in K$, le théorème d'existence d'un flot local ([[ch07-existence-flot-local]], sans paramètre) en $(0,x)$ fournit un voisinage ouvert $U_x$ de $x$ dans $U$ et $\epsilon_x>0$ tels que, pour tout $y\in U_x$, il existe une (unique) courbe intégrale définie sur $]-\epsilon_x,\epsilon_x[$ de condition initiale $(0,y)$. La partie compacte $K$ est recouverte par les ouverts $U_x$, $x\in K$ ; on en extrait un sous-recouvrement fini : $K\subset\bigcup_{i=1}^nU_{x_i}$. Soit $\epsilon>0$ tel que $2\epsilon\le\min_{1\le i\le n}\epsilon_{x_i}$. Alors pour tout $y\in K$, en choisissant $i$ avec $y\in U_{x_i}$, il existe une courbe intégrale de condition initiale $(0,y)$ définie sur $]-\epsilon_{x_i},\epsilon_{x_i}[\,\supset\,]-2\epsilon,2\epsilon[$, autrement dit $]-2\epsilon,2\epsilon[\,\subset J_0(y)$. Quitte à diminuer $\epsilon$, on peut aussi supposer $\epsilon<b-\tau_0$ (on a $b>\tau_0$ car $J$ est un intervalle ouvert contenant $\tau_0$ ; si $b=+\infty$ il n'y a rien à démontrer). Le poly omet cette précaution, qui sert à garantir $b-\epsilon\ge\tau_0$.

**Étape 2 : prolongement au-delà de $b$.** Supposons par l'absurde $b<+\infty$. Posons $t_1=b-\epsilon$. Comme $\tau_0<t_1<b$ et que $J$ est un intervalle contenant $\tau_0$ de borne supérieure $b$, on a $t_1\in J$ et $y_0:=\alpha(t_1)\in\alpha([\tau_0,b[)\subset K$. Par l'étape 1, il existe une courbe intégrale $\beta$ de condition initiale $(0,y_0)$ définie sur $]-2\epsilon,2\epsilon[$. Par l'étape 0,
$$
\gamma(t)=\beta\big(t-(b-\epsilon)\big)
$$
est une courbe intégrale définie sur $]b-3\epsilon,b+\epsilon[$, et $\gamma(t_1)=\beta(0)=y_0=\alpha(t_1)$. (Le poly écrit $\beta(t+b-\epsilon)$ : il faut lire $\beta(t-(b-\epsilon))$.)

Les courbes $\alpha$ et $\gamma$ ont la même condition initiale $(t_1,y_0)$ ; par l'unicité globale ([[ch07-unicite-globale]]), elles coïncident sur l'intervalle ouvert $J\cap\,]b-3\epsilon,b+\epsilon[$, qui contient $t_1$. On définit alors $\tilde\alpha$ sur $\tilde J=J\cup\,]b-3\epsilon,b+\epsilon[$ (réunion de deux intervalles ouverts ayant le point commun $t_1$, donc intervalle ouvert) par $\tilde\alpha=\alpha$ sur $J$ et $\tilde\alpha=\gamma$ sur $]b-3\epsilon,b+\epsilon[$ : c'est cohérent sur l'intersection. Au voisinage de chaque point, $\tilde\alpha$ coïncide avec $\alpha$ ou avec $\gamma$, donc $\tilde\alpha$ est une courbe intégrale, et $\tilde\alpha(\tau_0)=\alpha(\tau_0)=x_0$. Par définition de $J=J_{\tau_0}(x_0)$ comme réunion de **tous** les intervalles de courbes intégrales de condition initiale $(\tau_0,x_0)$ ([[ch07-courbe-integrale-maximale-def]]), $\tilde J\subset J$, donc $b+\epsilon\le\sup J=b$ : contradiction. Donc $b=+\infty$.

**Étape 3 : borne inférieure.** Soit $a=\inf J$, et supposons $\alpha(]a,\tau_0])\subset K$. La courbe $\delta(t)=\alpha(-t)$, définie sur $-J$, vérifie $\delta'(t)=-\alpha'(-t)=-X(\delta(t))$ : c'est une courbe intégrale du champ autonome lipschitzien $-X$, de condition initiale $(-\tau_0,x_0)$, et elle est **maximale** (une courbe intégrale de $-X$ prolongeant $\delta$ donnerait, par le même calcul, une courbe intégrale de $X$ prolongeant $\alpha$). Sa borne supérieure est $-a$ et $\delta([-\tau_0,-a[)=\alpha(]a,\tau_0])\subset K$. Les étapes 1–2 appliquées à $-X$ donnent $-a=+\infty$, soit $a=-\infty$. $\square$

**Complément (même preuve, hors poly) : sortie définitive des compacts.** Supposons $b<+\infty$ et soit $K\subset U$ un compact quelconque, avec $\epsilon$ associé par l'étape 1. Si $t_1\in J$ vérifie $t_1>b-2\epsilon$ et $\alpha(t_1)\in K$, la courbe $t\mapsto\beta(t-t_1)$ (où $\beta$ est issue de $(0,\alpha(t_1))$ et définie sur $]-2\epsilon,2\epsilon[$) prolonge $\alpha$ jusqu'à $t_1+2\epsilon>b$ : contradiction comme à l'étape 2. Donc $\alpha(t)\notin K$ pour tout $t\in J$ tel que $t>b-2\epsilon$. Dans $E=U=\R^N$, en prenant $K=\bar B(0,R)$ pour tout $R$, on obtient $\norm{\alpha(t)}\to+\infty$ quand $t\to b^-$.

## Preuve à trous

On voit $X$ comme un champ sur $\R\times U$ ; $\alpha=\alpha_{\tau_0,x_0}$, $J=J_{\tau_0}(x_0)$.

Pour chaque $x\in K$, un flot local en $(0,x)$ donne un voisinage $U_x$ et $\epsilon_x>0$ tels que toute condition initiale $(0,y)$, $y\in U_x$, ait une courbe intégrale sur $]-\epsilon_x,\epsilon_x[$. <trou indice="propriété de $K$ à utiliser">Par compacité, $K\subset U_{x_1}\cup\dots\cup U_{x_n}$, et avec $2\epsilon\le\min_i\epsilon_{x_i}$, toute courbe intégrale issue de $(0,y)$, $y\in K$, est définie sur $]-2\epsilon,2\epsilon[$</trou>. On prend de plus $\epsilon<b-\tau_0$.

Supposons $b<+\infty$. Alors $t_1=b-\epsilon\in J$ et <trou indice="où se trouve $\alpha(b-\epsilon)$ ?">$y_0=\alpha(b-\epsilon)\in\alpha([\tau_0,b[)\subset K$</trou>. Soit $\beta$ la courbe intégrale de condition initiale $(0,y_0)$, définie sur $]-2\epsilon,2\epsilon[$. Comme $X$ est autonome, <trou indice="translater $\beta$ en temps">$\gamma(t)=\beta(t-(b-\epsilon))$ est une courbe intégrale définie sur $]b-3\epsilon,b+\epsilon[$, avec $\gamma(b-\epsilon)=\alpha(b-\epsilon)$</trou>. Par unicité globale, $\gamma=\alpha$ sur $J\cap\,]b-3\epsilon,b+\epsilon[$, donc le recollement de $\alpha$ et $\gamma$ est une courbe intégrale de condition initiale $(\tau_0,x_0)$ définie sur $J\cup\,]b-3\epsilon,b+\epsilon[$. <trou indice="définition de $J_{\tau_0}(x_0)$">Par maximalité, $J\cup\,]b-3\epsilon,b+\epsilon[\,\subset J$, d'où $b+\epsilon\le b$ : absurde</trou>. Donc $b=+\infty$. $\square$

## Exemples

**Exemple 1 (quantité conservée : oscillateur non linéaire).** $E=U=\R^2$, $X(x,y)=(y,-x^3)$, de classe $C^1$ donc localement lipschitzien. Pour une courbe intégrale $(x(t),y(t))$, la quantité $H=\frac{y^2}2+\frac{x^4}4$ est conservée :
$$
\frac{\dd}{\dd t}H(x(t),y(t))=y\,y'+x^3\,x'=y\,(-x^3)+x^3\,y=0.
$$
Donc la courbe maximale issue de $(0,(x_0,y_0))$ reste dans $K=\{H=c\}$, $c=H(x_0,y_0)$, qui est fermé (image réciproque de $\{c\}$ par $H$ continue) et borné ($\abs x\le(4c)^{1/4}$, $\abs y\le\sqrt{2c}$), donc compact dans $\R^2$. Le lemme des bouts (dans les deux sens) donne $J_0(x_0,y_0)=\R$ : toutes les solutions sont globales.

**Exemple 2 (futur global, passé fini).** $U=E=\R$, $X(x)=-x^3$, $x_0\ne0$. Pour $t\in[0,b[$, $(\alpha^2)'=2\alpha\alpha'=-2\alpha^4\le0$, donc $\abs{\alpha(t)}\le\abs{x_0}$ : $\alpha([0,b[)\subset[-\abs{x_0},\abs{x_0}]$, compact, et $b=+\infty$. Vers le passé, il n'y a pas de confinement et en effet la solution explose : $\alpha(t)=\dfrac{x_0}{\sqrt{1+2x_0^2t}}$ (vérification : $\alpha'=x_0\cdot\big(-\tfrac12\big)\cdot2x_0^2\,(1+2x_0^2t)^{-3/2}=-\alpha^3$), donc $J_0(x_0)=\,]-\frac1{2x_0^2},+\infty[$ et $\abs{\alpha(t)}\to+\infty$ quand $t\to\big(-\frac1{2x_0^2}\big)^+$, conformément au complément.

**Exemple 3 (champ dissipatif dans $\R^N$).** Soit $X : \R^N\to\R^N$ localement lipschitzien avec $\langle X(x),x\rangle\le0$ pour tout $x$ (produit scalaire euclidien). Pour toute courbe intégrale, $\frac{\dd}{\dd t}\norm{\alpha(t)}^2=2\langle\alpha(t),X(\alpha(t))\rangle\le0$, donc $\alpha([\tau_0,b[)\subset\bar B(0,\norm{x_0})$, boule fermée compacte de $\R^N$. Le lemme des bouts donne $b=+\infty$ : toutes les solutions sont définies dans le futur.

## Pièges

* > ⚠️ Le compact doit être un compact **de $U$** : « borné » ne suffit pas si $U\neq E$ (la trajectoire peut atteindre le bord, exemple $X=-1$ sur $]0,+\infty[$), ni en dimension infinie (borné fermé $\neq$ compact).
* > ⚠️ La réciproque est fausse : $b=+\infty$ n'implique pas que la trajectoire reste dans un compact ($X(x)=1$ sur $\R$ : $\alpha(t)=t$ est globale et non bornée).
* L'énoncé est unilatéral : le confinement de $[\tau_0,b[$ donne $b=+\infty$, pas $\inf J_{\tau_0}(x_0)=-\infty$ (exemple 2). Pour une solution définie sur $\R$, il faut contrôler les deux côtés.
* Dans la preuve, l'$\epsilon$ uniforme vient de la **compacité** ; un $\epsilon_y$ dépendant du point ne suffit pas (on pourrait avoir $\epsilon_{\alpha(t)}\to0$ quand $t\to b$).
* Pour un champ dépendant du temps sur $I\times U$ avec $I\neq\R$, la solution peut s'arrêter au bord de $I$ en restant bornée (H1).
* Erreur de rédaction fréquente : appliquer le lemme sans avoir vérifié l'hypothèse de régularité (au moins localement lipschitzien) ou sans avoir **démontré** le confinement (quantité conservée, inégalité différentielle).
