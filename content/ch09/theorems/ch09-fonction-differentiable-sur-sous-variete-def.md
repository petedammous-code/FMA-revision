---
id: ch09-fonction-differentiable-sur-sous-variete-def
type: definition
chapter: 9
title: Fonction différentiable / de classe $C^r$ sur une sous-variété
ref: Définition IX.7.1
page: 159
importance: 2
depends: [ch09-sous-variete-def]
tags: [sous-variete, fonction-differentiable, classe-cr, parametrage-local, carte]
---
## Intuition

> 💡 Une fonction $f$ définie **seulement** sur une sous-variété $S$ (par exemple une température sur la surface de la Terre) n'a pas de différentielle au sens du chapitre V : $S$ n'est pas un ouvert de $\R^N$, on ne peut pas faire varier le point dans toutes les directions. L'idée : on **lit $f$ dans une carte**. Un paramétrage local $x:U\to S$ ([[ch09-sous-variete-def]]) transforme $f$ en une fonction $f\circ x$ définie sur un ouvert $U$ de $\R^m$, où la différentiabilité a un sens.

Pour que la définition soit intrinsèque, on exige la propriété pour **tous** les paramétrages ; le [[ch09-changement-parametrage|changement de paramétrage]] étant un $C^k$-difféomorphisme, il suffira en fait d'en tester **un** ([[ch09-remarque-un-parametrage-suffit]]). Ici « paramétrage » signifie paramétrage local au sens de la Définition IX.2.1 (de classe $C^k$, homéomorphisme sur un ouvert de $S$, immersion), et « différentiable » / « de classe $C^r$ » pour $f\circ x$ a le sens usuel sur un ouvert de $\R^m$ ([[ch05-differentielle-def]], [[ch05-classe-ck-def]]).

## Énoncé

**Définition (poly, Définition IX.7.1, p. 159).** Soit $f:S\to\R$ une fonction définie sur une sous-variété $S$ de dimension $m$ et de classe $C^k$ de $\R^N$.

* On dit que $f$ est **différentiable en $p\in S$** si pour tout paramétrage $x:U\to S$ avec $p\in x(U)\subset S$, la fonction $f\circ x:U\to\R$ est différentiable en $q=x^{-1}(p)$.
* On dit que $f$ est **différentiable sur $S$** si elle est différentiable en tout point de $S$.
* On dit que $f$ est **de classe $C^r$**, $r\le k$, sur $S$ si pour tout paramétrage $x:U\to S$ la fonction $f\circ x:U\to\R$ est de classe $C^r$ sur $U$.

La même définition vaut pour $f:S\to\R^n$ (Remarque IX.7.4, [[ch09-remarque-valeurs-vectorielles]]).

## Hypothèses

### H1 — $S$ est de classe $C^k$ et $r\le k$

**Rôle.** Les changements de paramétrage ne sont que des $C^k$-difféomorphismes ; la propriété « $f\circ x$ est $C^r$ » n'est stable par $x\mapsto x\circ\theta$ que si $r\le k$. Avec $r\le k$, la définition est raisonnable : par exemple la restriction à $S$ d'une fonction $C^r$ sur un ouvert de $\R^N$ est $C^r$ sur $S$.

**Si on la retire.** Pour $r>k$, la notion devient absurde. Soit $g(t)=t|t|$ ($C^1$, pas $C^2$) et $S=\mathrm{Graphe}(g)\subset\R^2$, sous-variété de classe $C^1$, paramétrée par $x_1(t)=(t,g(t))$. Soit $\theta(s)=s+s|s|$ : $\theta'(s)=1+2|s|\ge1$, donc $\theta$ est un $C^1$-difféomorphisme de $\R$, et $x_2=x_1\circ\theta$ est un autre paramétrage $C^1$ de $S$ ($x_2'(s)=\theta'(s)\,x_1'(\theta(s))\neq0$). Pour la fonction coordonnée $f(X,Y)=X$ (restriction d'une forme linéaire !), $f\circ x_1(t)=t$ est $C^\infty$ mais $f\circ x_2(s)=s+s|s|$ n'est pas $C^2$. Exiger « $C^2$ pour tout paramétrage » exclurait même les coordonnées ; « $C^2$ pour un paramétrage » dépendrait du paramétrage.

### H2 — « pour tout paramétrage » (en $p$)

**Rôle.** Rend la définition indépendante de tout choix. Pour la différentiabilité en $p$, seuls comptent les paramétrages dont l'image contient $p$ ; pour la classe $C^r$, tous les paramétrages, quel que soit leur point.

**Si on la retire.** Remplacer « pour tout paramétrage » par « pour un paramétrage (en $p$) » donne en fait **la même notion** : c'est exactement le contenu de [[ch09-remarque-un-parametrage-suffit]], conséquence du fait que les changements de paramétrage sont des $C^k$-difféomorphismes. Le « pour tout » est donc un choix de rédaction (il rend la définition visiblement intrinsèque), pas une hypothèse restrictive. Ce qui est en revanche indispensable, c'est le sens strict du mot « paramétrage » : si l'on testait avec une application qui n'est pas un vrai paramétrage (pas immersive), on obtiendrait des absurdités : sur $S=\R$, $x(t)=t^3$ est un homéomorphisme $C^\infty$, et $f(s)=s^{1/3}$ vérifie $f\circ x(t)=t$, $C^\infty$, alors que $f$ n'est pas dérivable en $0$ (lu dans le paramétrage $\mathrm{id}_\R$). C'est pourquoi le mot « paramétrage » est pris au sens strict.

## Exemples

* **Restriction d'une fonction ambiante.** Si $F:\Omega\to\R$ est de classe $C^r$ sur un ouvert $\Omega$ de $\R^N$ contenant $S$, avec $r\le k$, alors $f=F|_S$ est $C^r$ sur $S$ : pour tout paramétrage $x$, $f\circ x=F\circ x$ est $C^r$ comme composée ($x$ est $C^k$, $k\ge r$). Exemple : la fonction hauteur $f(X,Y,Z)=Z$ sur la sphère $\mathbb S^2$ (cf. [[ch09-ex-fonction-hauteur]]).
* **Une fonction non différentiable dans $\R^N$ peut l'être sur $S$.** $F(X,Y)=|X^2+Y^2-1|$ n'est différentiable en aucun point du cercle $\mathbb S^1$ (le long de la normale, $F(p+sp)=|2s+s^2|$ n'est pas dérivable en $s=0$), mais $F|_{\mathbb S^1}=0$ est $C^\infty$ sur $\mathbb S^1$. Ce qui compte, ce sont les valeurs **sur** $S$.
* **Une fonction non différentiable sur $S$.** Sur $\mathbb S^1$, $f(X,Y)=|Y|$ : avec $x(t)=(\cos t,\sin t)$, $t\in]-\pi,\pi[$, $f\circ x(t)=|\sin t|$ n'est pas dérivable en $t=0$, donc $f$ n'est pas différentiable en $(1,0)$ (il suffit d'**un** paramétrage où ça échoue, puisque la définition demande « pour tout »).
* **Fonction définie seulement sur $S$.** La fonction angle sur $S=\mathbb S^1\setminus\{(-1,0)\}$ (ouvert de $\mathbb S^1$, donc sous-variété, [[ch09-ex-ouvert-de-sous-variete]]), définie par $f(\cos t,\sin t)=t$ pour $t\in]-\pi,\pi[$ : $f\circ x=\mathrm{id}$ pour $x(t)=(\cos t,\sin t)$, et pour le paramétrage $y(u)=(\sqrt{1-u^2},u)$, $u\in]-1,1[$, $f\circ y(u)=\arcsin u$, $C^\infty$. On montre que $f$ est $C^\infty$ grâce à [[ch09-remarque-un-parametrage-suffit]].

## Pièges

* > ⚠️ $f\circ x$ est une fonction sur l'ouvert $U\subset\R^m$ ($m=\dim S$), pas sur $\R^N$ : sa différentielle en $q$ est une application linéaire $\R^m\to\R$. La « différentielle de $f$ en $p$ », application linéaire sur l'espace tangent $T_pS$, ne sera définie que plus tard ([[ch09-differentielle-entre-sous-varietes-def]]).
* > ⚠️ On ne peut pas parler de « $f$ de classe $C^r$ » pour $r>k$ (H1) : la régularité d'une fonction sur $S$ est plafonnée par celle de $S$.
* Ne pas confondre avec la différentiabilité d'un prolongement : $f$ n'a pas besoin d'être définie hors de $S$. (Réciproquement, toute $f$ de classe $C^r$ sur $S$ se prolonge **localement** en une fonction $C^r$ sur un ouvert de $\R^N$ : Exercice IX.7.3.)
* « Pour tout paramétrage » rend la définition **facile à réfuter** (un seul paramétrage qui échoue suffit) et a priori difficile à vérifier ; c'est [[ch09-remarque-un-parametrage-suffit]] qui rend la vérification pratique.
