---
id: ch09-caracterisation-equations-locales
type: proposition
chapter: 9
title: Un ensemble localement défini par une équation régulière est une sous-variété
ref: Proposition IX.4.5
page: 155
importance: 2
depends: [ch09-sous-variete-equation-valeur-reguliere, ch09-sous-variete-def, ch09-point-critique-valeur-reguliere-def]
tags: [sous-variete, equation-locale, valeur-reguliere, caracterisation]
---
## Intuition

> 💡 Être une sous-variété est une propriété **locale** : il suffit de la vérifier près de chaque point. On n'a donc pas besoin d'une seule équation globale $f=a$ valable partout : il suffit que, près de chaque point $p$ de $S$, l'ensemble $S$ soit décrit par **une** équation $\Psi=0$ non dégénérée (avec $\Psi$ qui peut changer d'un point à l'autre).

Rappel : $0$ est une **valeur régulière** de $\Psi:V\to\R^{N-m}$ si $d\Psi_x$ est surjective en tout $x\in V$ tel que $\Psi(x)=0$ ([[ch09-point-critique-valeur-reguliere-def]]). Le cas d'une équation globale est [[ch09-sous-variete-equation-valeur-reguliere]] ; le poly traite $a=0$ ici, ce qui n'est pas une restriction (remplacer $\Psi$ par $\Psi-a$).

## Énoncé

**Proposition (poly, Proposition IX.4.5, p. 155).** Soit $S$ une partie de $\R^N$ et supposons que pour tout point $p$ de $S$, il existe un voisinage ouvert $V$ de $p$ dans $\R^N$ et une fonction $\Psi:V\to\R^{N-m}$ de classe $C^k$ dont $0$ est valeur régulière tels que
$$
S\cap V=\{x\in V\mid\Psi(x)=0\}.
$$
Alors $S$ est une sous-variété de dimension $m$ de $\R^N$ (de classe $C^k$).

## Hypothèses

### H1 — $\Psi$ de classe $C^k$ sur un voisinage ouvert $V$ de $p$

**Rôle.** C'est le cadre de [[ch09-sous-variete-equation-valeur-reguliere]] (fonction $C^k$ sur un ouvert de $\R^N$), qu'on applique à $\Psi$.

**Si on la retire.** Sans régularité, toute partie fermée $F$ de $\R^N$ est l'ensemble des zéros d'une fonction continue ($\Psi(x)=\dist(x,F)$) : par exemple la croix $\{xy=0\}$, qui n'est pas une sous-variété ([[ch09-contre-ex-croix]]). La notion de « valeur régulière » n'a d'ailleurs de sens que si $\Psi$ est différentiable.

### H2 — $0$ est valeur régulière de $\Psi$

**Rôle.** C'est l'hypothèse du point 2 de [[ch09-sous-variete-equation-valeur-reguliere]], qui fournit les paramétrages locaux.

**Si on la retire.** $S=\{(x,y),\ xy=0\}$ est définie globalement par $\Psi(x,y)=xy$, de classe $C^\infty$, mais $0$ est valeur critique ($d\Psi_{(0,0)}=0$), et la croix n'est pas une sous-variété ([[ch09-contre-ex-croix]]).

### H3 — l'égalité $S\cap V=\Psi^{-1}(\{0\})$ (pas une inclusion)

**Rôle.** Elle permet de transférer à $S$ la structure de sous-variété de $\Psi^{-1}(\{0\})$.

**Si on la retire.** La demi-droite $S=[0;+\infty[\times\{0\}$ vérifie $S\subset\Psi^{-1}(\{0\})$ pour $\Psi(x,y)=y$ (régulière) sans être une sous-variété ([[ch09-contre-ex-demi-droite]]).

### H4 — le même $m$ (même espace d'arrivée $\R^{N-m}$) en tout point

**Rôle.** Toutes les équations locales doivent donner la même dimension $m$, imposée par la définition.

**Si on la retire.** $S=(\R\times\{0\})\cup\{(0,1)\}$ est localement définie par $\Psi(x,y)=y$ (une équation, $m=1$) près de la droite, et par $\Psi(x,y)=(x,y-1)$ (deux équations, $m=0$) près de $(0,1)$, toutes deux de valeur $0$ régulière ; mais $S$ n'est pas une sous-variété d'une dimension fixée.

## Idée de la preuve

Pour chaque $p\in S$, $S\cap V=\Psi^{-1}(\{0\})$ est une sous-variété par [[ch09-sous-variete-equation-valeur-reguliere]] ; un paramétrage local de cette sous-variété en $p$, restreint à un ouvert inclus dans $V$, est un paramétrage local de $S$ en $p$.

## Preuve

*Le poly se contente d'une phrase (« la définition est locale ») ; voici le détail.*

Soit $p\in S$, et $V$, $\Psi$ comme dans l'énoncé. Comme $0$ est une valeur régulière de $\Psi:V\to\R^{N-m}$, de classe $C^k$ sur l'ouvert $V$, le point 2 de [[ch09-sous-variete-equation-valeur-reguliere]] (appliqué avec $f=\Psi$, $a=0$, si $N>m$) montre que $S_V=\Psi^{-1}(\{0\})=S\cap V$ est une sous-variété de dimension $m$ et de classe $C^k$. (Si $m=N$, $\Psi$ est à valeurs dans $\R^0=\{0\}$ et $S\cap V=V$ est un ouvert, donc une sous-variété de dimension $N$, [[ch09-ex-ouvert-sous-variete]].)

Comme $p\in S_V$, il existe ([[ch09-sous-variete-def]]) un ouvert $U$ de $\R^m$, un voisinage ouvert $V_2$ de $p$ dans $\R^N$ et une application $x:U\to V_2$ de classe $C^k$, immersive, réalisant un homéomorphisme de $U$ sur $V_2\cap S_V$. Posons $V_3=V_2\cap V$ : c'est un voisinage ouvert de $p$ dans $\R^N$, et
$$
V_3\cap S=V_2\cap(V\cap S)=V_2\cap S_V=x(U).
$$
Donc $x:U\to V_3$ est un paramétrage local de $S$ en $p$ (mêmes propriétés : $C^k$, homéomorphisme sur $V_3\cap S$, immersion). Ceci valant pour tout $p\in S$, $S$ est une sous-variété de dimension $m$ et de classe $C^k$. $\square$

## Preuve à trous

Soit $p\in S$. Par hypothèse, $S\cap V=\Psi^{-1}(\{0\})$ avec $0$ valeur régulière de $\Psi$, donc <trou indice="quel résultat sur les valeurs régulières ?">$S\cap V$ est une sous-variété de dimension $m$ par la Proposition IX.4.1 (point 2)</trou>. Soit $x:U\to V_2\cap(S\cap V)$ un paramétrage local de $S\cap V$ en $p$. Alors, avec <trou>$V_3=V_2\cap V$, on a $V_3\cap S=V_2\cap(S\cap V)=x(U)$</trou>, donc <trou>$x$ est aussi un paramétrage local de $S$ en $p$</trou>. $\square$

## Exemples

* **Des équations différentes selon les zones.** Une partie $S$ qui est, près de chacun de ses points, de la forme $\{g_1=0\}$ ou $\{g_2=0\}$ avec des fonctions différentes dans des zones différentes : par exemple $S=\{(x,y),\ y=\sin x\}\cup\{(x,y),\ y=\sin x+10\}$. Près d'un point de la première courbe, $\Psi_1=y-\sin x$ sur $V=\{y<5+\sin x\}$ ; près de la seconde, $\Psi_2=y-\sin x-10$ sur $V=\{y>5+\sin x\}$. Ici on pourrait aussi prendre l'équation globale $(y-\sin x)(y-\sin x-10)=0$, de valeur $0$ régulière (gradient non nul sur $S$ : $\partial_y=2y-2\sin x-10=\mp10$).
* **Une sous-variété non fermée.** La droite privée d'un point $S=(\R\times\{0\})\setminus\{(0,0)\}$ : en tout $p\in S$, $V=\R^2\setminus\{(0,0)\}$ et $\Psi(x,y)=y$ conviennent. Une équation globale $\Psi=0$ sur $\R^2$ entier avec $\Psi$ continue est impossible ($S$ n'est pas fermée, [[ch09-remarque-fermeture]]) : l'intérêt de l'énoncé local est de permettre des ouverts $V$ variables.
* **La spirale** $s\mapsto(e^s\cos s,e^s\sin s)$ : près de $p=x(s_0)$, on prend un petit disque $V$ centré en $p$, ne contenant pas $0$ et ne rencontrant pas les autres spires, une détermination continue $\theta$ de l'argument sur $V$ avec $\theta(p)=s_0$, et $\Psi=\ln\sqrt{x^2+y^2}-\theta$. Comme $d(\ln r)$ et $d\theta$ sont linéairement indépendantes ($d(\ln r)=\frac{x\,dx+y\,dy}{r^2}$, $d\theta=\frac{-y\,dx+x\,dy}{r^2}$), $d\Psi\neq0$ : $0$ est valeur régulière.

## Pièges

* > ⚠️ Il faut **une** équation locale en **chaque** point de $S$, et c'est l'**égalité** $S\cap V=\Psi^{-1}(\{0\})$ qu'il faut vérifier, pas seulement que $\Psi$ s'annule sur $S$.
* Le nombre d'équations est $N-m$ : la codimension, pas la dimension.
* Avec [[ch09-sous-variete-localement-equation]] (réciproque), cet énoncé donne une **définition équivalente** des sous-variétés (poly, Remarque IX.4.7, p. 156) : « localement le lieu des zéros d'une submersion ».
