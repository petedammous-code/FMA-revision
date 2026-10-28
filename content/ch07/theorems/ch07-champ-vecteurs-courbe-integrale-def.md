---
id: ch07-champ-vecteurs-courbe-integrale-def
type: definition
chapter: 7
title: Champ de vecteurs dépendant du temps, courbe intégrale, condition initiale
ref: Définition VII.1.1
page: 128
importance: 3
depends: [ch05-classe-ck-def, ch05-derivee-variable-reelle]
tags: [champ-de-vecteurs, courbe-integrale, condition-initiale, equation-differentielle, vocabulaire]
---
## Intuition

> 💡 Un **champ de vecteurs** attache à chaque instant $t$ et à chaque point $x$ une flèche $X(t,x)$ : la vitesse « imposée » en ce point à cet instant. Une **courbe intégrale** est le mouvement d'un point qui, à chaque instant, a exactement la vitesse imposée là où il se trouve : $\alpha'(t)=X(t,\alpha(t))$. Image : une feuille sur une rivière dont le courant $X(t,x)$ peut varier avec la marée ($t$) et avec l'endroit ($x$) ; la feuille suit le courant. La **condition initiale** $(t_0,x)$ dit où est la feuille à l'instant $t_0$.

Le mot « champ de vecteurs » traduit un changement de regard sur l'équation différentielle $\alpha'(t)=X(t,\alpha(t))$ (forme (VII.1.2), à laquelle on ramène toute équation d'ordre $k$ : [[ch07-reduction-ordre-un]]) : au lieu de voir $X$ comme « le second membre », on le voit comme une donnée géométrique sur l'espace $U$, et les solutions comme des courbes tracées dans $U$ tangentes aux flèches. C'est ce regard qui mènera au **flot** ([[ch07-flot-local-def]], [[ch07-flot-global-def]]).

Rappels. Un **espace de Banach** est un espace vectoriel normé complet (par exemple $\R^n$, $\C^n$, $\mathrm{M}_n(\R)$). Une **courbe paramétrée** de classe $C^p$ dans $E$ est une application $\alpha : J\to E$ de classe $C^p$ définie sur un intervalle $J$ de $\R$ ([[ch05-classe-ck-def]]) ; sa dérivée en $t$ est le vecteur $\alpha'(t)=d\alpha_t(1)=\lim_{h\to0}\frac{\alpha(t+h)-\alpha(t)}{h}\in E$ ([[ch05-derivee-variable-reelle]]), vecteur vitesse de la courbe.

## Énoncé

**Définition (poly, Définition VII.1.1, p. 128).** On appelle **champ de vecteurs dépendant du temps** sur un ouvert $U$ d'un espace de Banach $E$ une application continue
$$
X : I\times U\longrightarrow E,
$$
où $I$ est un intervalle ouvert (non vide) de $\R$. On appelle **courbe intégrale de classe $C^p$** du champ de vecteurs $X$ une courbe paramétrée $\alpha : J\to U$ de classe $C^p$ définie sur un intervalle ouvert $J$ de $\R$ contenu dans $I$ telle que pour tout $t\in J$,
$$
\alpha'(t)=X(t,\alpha(t)).
$$
Cette courbe intégrale est dite **de condition initiale** $(t_0,x)\in J\times U$ si $\alpha(t_0)=x$.

*Lecture.* Une courbe intégrale de $X$ est exactement une solution de l'équation différentielle (VII.1.2) $\alpha'(t)=X(t,\alpha(t))$ ; « de condition initiale $(t_0,x)$ » signifie qu'elle résout le problème de Cauchy $\alpha'=X(t,\alpha)$, $\alpha(t_0)=x$ (équation (VII.2.1) du poly). Lorsque $X$ ne dépend pas de $t$ ($X : U\to E$, équation **autonome**), on se ramène à la définition en posant $X(t,x)=X(x)$ et $I=\R$ ([[ch07-equation-autonome-def]]).

## Hypothèses

### H1 — $E$ est un espace de Banach et $U$ un ouvert de $E$

**Rôle.** La complétude de $E$ servira dans le théorème de Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]) : la solution est obtenue comme point fixe dans un espace complet de fonctions à valeurs dans $E$, et les intégrales $\int X(s,\alpha(s))\,ds$ doivent exister dans $E$. L'ouverture de $U$ permet d'entourer tout point $x_0\in U$ d'une boule fermée $\bar B(x_0,r)\subset U$ sur laquelle travailler.

**Si on la retire.** La définition garde un sens formel, mais les théorèmes tombent : sur $U=[0;+\infty[$ (non ouvert) avec $X(x)=-1$, aucune courbe intégrale de condition initiale $(0,0)$ n'existe sur un intervalle ouvert contenant $0$ (elle devrait valoir $-t<0$ pour $t>0$, hors de $U$).

### H2 — $I$ et $J$ sont des intervalles ouverts, $J\subset I$

**Rôle.** $J$ ouvert : la dérivée $\alpha'(t)$ est une vraie dérivée (bilatère) en tout point, sans effets de bord. $J\subset I$ : il faut que $X(t,\alpha(t))$ soit défini. Les intervalles (connexes) sont indispensables aux arguments de connexité du chapitre (unicité globale [[ch07-unicite-globale]]).

**Si on la retire.** Si $J$ n'est pas connexe (réunion de deux intervalles disjoints), on peut recoller deux solutions sans rapport l'une avec l'autre et toute unicité disparaît ; si $J$ est fermé, la dérivée aux bornes n'est que unilatère et la notion de solution maximale ([[ch07-courbe-integrale-maximale-def]]) n'a plus de sens simple. Hypothèses de cadre, à respecter.

### H3 — $X$ est continue sur $I\times U$

**Rôle.** Elle assure que $t\mapsto X(t,\alpha(t))$ est continue pour toute courbe continue $\alpha$, donc que l'équation $\alpha'=X(t,\alpha)$ équivaut à l'équation intégrale (VII.2.2) ([[ch07-equation-integrale]]) et que toute solution dérivable est automatiquement $C^1$. C'est aussi l'hypothèse minimale du théorème de Peano (existence, [[ch07-peano-non-unicite]]).

**Si on la retire.** Plus d'existence en général : pour $X(x)=1$ si $x\le0$, $X(x)=-1$ si $x>0$, le problème $\alpha'=X(\alpha)$, $\alpha(0)=0$ n'a aucune solution $C^1$ (voir [[ch07-cauchy-lipschitz]], hypothèse « $X$ continue »).

### H4 — $p\ge1$ implicitement ; $\alpha$ à valeurs dans $U$

**Rôle.** Le poly ne précise pas $p$ : il faut $p\ge1$ pour que $\alpha'$ existe. Et $\alpha(t)$ doit rester dans $U$ pour que $X(t,\alpha(t))$ ait un sens.

**Si on la retire.** Si $X$ est de classe $C^p$, toute courbe intégrale $C^1$ est automatiquement $C^{p+1}$ : si $\alpha$ est $C^j$ avec $j\le p$, alors $\alpha'=X(t,\alpha(t))$ est $C^j$ (composée), donc $\alpha$ est $C^{j+1}$ ; de $j=1$ à $j=p$ on obtient $C^{p+1}$ (c'est l'argument de régularité en $t$ du Théorème VII.2.8, [[ch07-cauchy-lipschitz-parametres]]). La précision « de classe $C^p$ » est donc surtout du confort. La contrainte $\alpha(J)\subset U$, elle, peut forcer $J$ à être strictement plus petit que $I$ (exemple 3).

## Exemples

* **Champ dépendant du temps sur la droite.** $E=U=\R$, $I=\R$, $X(t,x)=2tx$. À l'instant $t$, la flèche au point $x$ est $2tx$ : pour $t<0$ elle pointe vers $0$, pour $t>0$ elle s'en éloigne. La courbe intégrale de condition initiale $(t_0,x)$ est $\alpha(t)=x\,e^{t^2-t_0^2}$ sur $J=\R$ : en effet $\alpha'(t)=2t\,x\,e^{t^2-t_0^2}=2t\,\alpha(t)=X(t,\alpha(t))$ et $\alpha(t_0)=x$. Comparer au champ autonome $X(x)=x$, dont les courbes intégrales sont $\alpha(t)=x\,e^{t-t_0}$.

* **Champ de rotation du plan.** $E=U=\R^2$, $X(x,y)=(-y,x)$ (champ autonome, $I=\R$). Pour $r\ge0$, $\alpha(t)=\big(r\cos(t-t_0),\,r\sin(t-t_0)\big)$ vérifie $\alpha'(t)=\big(-r\sin(t-t_0),\,r\cos(t-t_0)\big)=X(\alpha(t))$ et $\alpha(t_0)=(r,0)$ : c'est une courbe intégrale de condition initiale $(t_0,(r,0))$, qui parcourt le cercle de rayon $r$ à vitesse angulaire $1$. En revanche $\gamma(t)=(r\cos2t,r\sin2t)$ parcourt le même cercle mais **n'est pas** une courbe intégrale : $\gamma'(t)=2X(\gamma(t))\ne X(\gamma(t))$ dès que $r>0$.

* **Le rôle de $U$ et de $J$.** $E=\R$, $U=\,]0;1[$, $I=\R$, $X(t,x)=1$. La courbe intégrale de condition initiale $(t_0,x)$ est $\alpha(t)=x+(t-t_0)$ ; elle doit rester dans $U$, donc n'est définie que sur $J=\,]t_0-x\,;\,t_0+1-x[$, strictement plus petit que $I=\R$. Aucun prolongement à un intervalle plus grand n'est possible dans $U$ : c'est le phénomène de « sortie du domaine » du lemme des bouts ([[ch07-lemme-des-bouts]]).

## Pièges

* > ⚠️ Une courbe intégrale est une **application** $t\mapsto\alpha(t)$ (un paramétrage avec sa vitesse), pas une trajectoire (l'image $\alpha(J)$) : le cercle parcouru à vitesse double n'est pas une courbe intégrale du champ de rotation (exemple 2).
* La condition initiale est un **couple** $(t_0,x)$ : un instant et un point. Pour un champ dépendant du temps, changer $t_0$ en gardant $x$ change la solution (exemple 1 : $x\,e^{t^2-t_0^2}$ dépend de $t_0$) ; pour un champ autonome, cela ne fait que translater le temps ([[ch07-translation-temps-autonome]]).
* $J$ doit être inclus dans $I$ et $\alpha$ doit rester dans $U$ : une « solution » qui sort de $U$ cesse d'être une courbe intégrale (exemple 3). La restriction d'une courbe intégrale à un sous-intervalle ouvert est encore une courbe intégrale : « la » courbe intégrale d'une condition initiale n'a de sens qu'avec la notion de courbe intégrale **maximale** ([[ch07-courbe-integrale-maximale-def]]).
* La définition n'affirme ni existence ni unicité : c'est le travail du théorème de Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]) sous l'hypothèse « localement lipschitzien en la seconde variable » ([[ch07-localement-lipschitzien-def]]) ; sans elle, l'unicité peut tomber ([[ch07-peano-non-unicite]]).
* Pour une équation d'ordre $k$, le « point » $x$ de la condition initiale est le paquet $(\alpha(t_0),\dots,\alpha^{(k-1)}(t_0))$ et $U$ est un ouvert de $E^k$ ([[ch07-reduction-ordre-un]]).
* Notation : $E$ désigne ici l'espace de Banach ambiant ; ne pas le confondre avec l'ensemble $\mathcal E$ des couples $(t_0,t)$ qui apparaît dans la définition du flot local ([[ch07-flot-local-def]]).
