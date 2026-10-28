---
id: ch09-sous-variete-localement-graphe
type: proposition
chapter: 9
title: Toute sous-variété est localement un graphe (à isomorphisme linéaire près)
ref: Proposition IX.5.3
page: 157
importance: 3
depends: [ch09-sous-variete-def, ch06-inversion-locale]
tags: [sous-variete, graphe, inversion-locale, isomorphisme-lineaire, redressement]
---
## Intuition

> 💡 Regardez une surface lisse de très près autour d'un point $p$ : elle ressemble à son plan tangent. Si l'on prend ce plan (ou n'importe quel plan qui n'est pas « vertical » par rapport à elle) comme « sol », la surface est au-dessus de lui un **graphe** : à chaque point du sol correspond exactement un point de la surface, de hauteur $f(u)$. Il suffit de choisir les axes (par un isomorphisme linéaire $A$) pour que le sol soit $\R^m\times\{0\}$.

Le mécanisme : un **paramétrage local** $x$ de $S$ en $p$ ([[ch09-sous-variete-def]]) a une différentielle $dx_q$ injective. On choisit $A$ pour que $A^{-1}$ envoie l'image $dx_q(\R^m)$ sur $\R^m\times\{0\}$ ; alors les $m$ premières coordonnées $i$ de $A^{-1}\circ x$ forment un difféomorphisme local de $\R^m$ (par le [[ch06-inversion-locale|théorème d'inversion locale]]), et on peut **reparamétrer** par $u_1=i(u)$ : les coordonnées restantes deviennent une fonction $f(u_1)$. C'est la réciproque de [[ch09-localement-graphe-implique-sous-variete]].

## Énoncé

**Proposition (poly, Proposition IX.5.3, p. 157).** Soit $S$ une sous-variété de dimension $m$ de classe $C^k$ de $\R^N$. Alors pour tout point $p$ de $S$, il existe un voisinage ouvert $V$ de $p$ dans $\R^N$, un isomorphisme linéaire $A:\R^N\to\R^N$, un ouvert $U$ de $\R^m$ et une application $f:U\to\R^{N-m}$ de classe $C^k$ telle que
$$
V\cap S=V\cap\{A((u,f(u))) ;\ u\in U\}.
$$

(La preuve donne même $V\cap S=A(\mathrm{Graphe}(f))$ exactement, et l'on peut choisir $A$ pour que $A(\R^m\times\{0\})$ soit l'image de $dx_q$, qui sera l'espace tangent $T_pS$ : voir [[ch09-graphe-au-dessus-du-plan-tangent]].)

## Hypothèses

### H1 — $S$ est une sous-variété de dimension $m$

**Rôle.** Fournit le paramétrage local $x:U\to V\cap S$ : sa différentielle injective permet l'inversion locale de $i$, et la propriété d'homéomorphisme fait de $x(U')$ un ouvert de $S$, donc de la forme $V\cap S$.

**Si on la retire.** La croix $S=(\R\times\{0\})\cup(\{0\}\times\R)$ ([[ch09-contre-ex-croix]]) n'est, au voisinage de $(0,0)$, le graphe tourné d'aucune fonction, même continue, avec $m=1$ : si $V\cap S=V\cap A(\mathrm{Graphe}(f))$, alors $u\mapsto A((u,f(u)))$ restreinte à l'ouvert des $u$ tels que ce point soit dans $V$ serait un homéomorphisme d'un ouvert de $\R$ sur $V\cap S$ (inverse $z\mapsto\pi_1(A^{-1}z)$). Pour un petit disque $D\subset V$ centré en $0$, $D\cap S$ (une croix connexe) serait homéomorphe à un ouvert connexe de $\R$, donc à un intervalle ; mais ôter un point d'un intervalle laisse au plus $2$ composantes connexes, alors que la croix privée de son centre en a $4$.

### H2 — la classe $C^k$ de $S$

**Rôle.** $i$ et $j$ sont $C^k$, l'inversion locale donne un inverse $\Phi$ de classe $C^k$, donc $f=j\circ\Phi$ est $C^k$.

**Si on la retire.** C'est une hypothèse de « bilan » : la classe de $f$ est celle de $S$, pas mieux. Par exemple $S=\mathrm{Graphe}(g)$ avec $g(t)=t|t|$ ($g$ est $C^1$, $g'(t)=2|t|$, mais pas $C^2$) est une sous-variété $C^1$ de $\R^2$ ; près de $0$, c'est le graphe de $g$ au-dessus de l'axe des abscisses, et de $s\mapsto\mathrm{sgn}(s)\sqrt{|s|}$ (même pas dérivable en $0$) au-dessus de l'axe des ordonnées. Aucun choix de $A$ ne donne une $f$ de classe $C^2$ : sinon $S$ serait une sous-variété $C^2$ près de $0$ ([[ch09-localement-graphe-implique-sous-variete]]), donc aurait un paramétrage régulier $y$ de classe $C^2$, dont la courbure algébrique $\kappa_y=\det(y',y'')/\norm{y'}^3$ est continue ; or pour $s$ voisin de $s_0=y^{-1}(0)$, $s\neq s_0$, on a $y=x_1\circ\theta$ avec $x_1(t)=(t,g(t))$ et $\theta=y_1$ de classe $C^2$ et de dérivée de signe constant, d'où $\kappa_y(s)=\mathrm{sgn}(\theta')\,\kappa_{x_1}(\theta(s))$ avec $\kappa_{x_1}(t)=\frac{2\,\mathrm{sgn}(t)}{(1+4t^2)^{3/2}}$, qui saute de $-2$ à $2$ en $t=0$ : contradiction.

## Idée de la preuve

On choisit $A$ avec $A^{-1}(dx_q(\R^m))=\R^m\times\{0\}$ et on écrit $A^{-1}\circ x=(i,j)$ ; $di_q$ est inversible, donc $i$ est un difféomorphisme local d'inverse $\Phi$ ; alors $A^{-1}\circ x\circ\Phi(u_1)=(u_1,j\circ\Phi(u_1))$ : c'est le graphe de $f=j\circ\Phi$.

## Preuve

Soit $p\in S$ et $x:U\to V\cap S$ un paramétrage local de $S$ en $p$ (Définition IX.2.1), $q=x^{-1}(p)$.

**Choix de $A$.** $dx_q$ est injective, donc $E=dx_q(\R^m)$ est un sous-espace de dimension $m$ de $\R^N$. Complétons une base $(\varepsilon_1,\dots,\varepsilon_m)$ de $E$ en une base $(\varepsilon_1,\dots,\varepsilon_N)$ de $\R^N$, et soit $A$ l'isomorphisme linéaire qui envoie la base canonique $(e_1,\dots,e_N)$ sur $(\varepsilon_1,\dots,\varepsilon_N)$. Alors $A(\R^m\times\{0\})=E$, i.e. $A^{-1}(dx_q(\R^m))=\R^m\times\{0\}$.

**Décomposition.** Écrivons $A^{-1}\circ x(u)=(i(u),j(u))$ avec $i(u)\in\R^m$, $j(u)\in\R^{N-m}$ ; $i$ et $j$ sont $C^k$ sur $U$. Comme $A^{-1}$ est linéaire, $d(A^{-1}\circ x)_q=A^{-1}\circ dx_q$ : c'est une application linéaire injective de $\R^m$ dans $\R^m\times\{0\}$, donc (dimensions égales) un isomorphisme de $\R^m$ sur $\R^m\times\{0\}$. Ses composantes sont $(di_q,dj_q)$ : ainsi $dj_q=0$ et $di_q$ est un isomorphisme de $\R^m$ dans $\R^m$.

**Inversion locale.** Par le théorème d'inversion locale ([[ch06-inversion-locale]]), il existe un ouvert $U'$ de $\R^m$ contenant $q$, que l'on peut supposer inclus dans $U$, et un ouvert $U_1$ de $\R^m$ tels que $i$ réalise un $C^k$-difféomorphisme de $U'$ sur $U_1$. Soit $\Phi:U_1\to U'$ son inverse, de classe $C^k$.

**Le graphe.** Soit $u_1\in U_1$ et $u=\Phi(u_1)\in U'$, de sorte que $u_1=i(u)$. Alors
$$
A^{-1}\circ x\circ\Phi(u_1)=A^{-1}\circ x(u)=(i(u),j(u))=(u_1,\ j\circ\Phi(u_1)).
$$
Posons $f=j\circ\Phi:U_1\to\R^{N-m}$, de classe $C^k$ comme composée. En appliquant $A$, et puisque $\Phi$ est une bijection de $U_1$ sur $U'$ :
$$
x(U')=\{x(\Phi(u_1)) ;\ u_1\in U_1\}=\{A((u_1,f(u_1))) ;\ u_1\in U_1\}=A(\mathrm{Graphe}(f)).
$$

**L'ouvert $V$.** $x$ est un homéomorphisme de $U$ sur $V\cap S$ et $U'$ est ouvert dans $U$, donc $x(U')$ est un ouvert de $V\cap S$ (pour la topologie induite) : il existe un ouvert $V''$ de $\R^N$ tel que $x(U')=V''\cap V\cap S$. L'ouvert $V_0=V''\cap V$ de $\R^N$ contient $p=x(q)$ et vérifie
$$
V_0\cap S=x(U')=A(\mathrm{Graphe}(f)).
$$
Comme $A(\mathrm{Graphe}(f))\subset V_0$, on a aussi $V_0\cap A(\mathrm{Graphe}(f))=A(\mathrm{Graphe}(f))=V_0\cap S$ : c'est l'énoncé, avec le voisinage $V_0$, l'isomorphisme $A$, l'ouvert $U_1$ et la fonction $f$. $\square$

*Remarque (variante utile en pratique).* La preuve n'utilise que l'inversibilité de $di_q$, pas $dj_q=0$. On peut donc prendre pour $A$ une **permutation des coordonnées** : la matrice jacobienne de $x$ en $q$ (de taille $N\times m$, de rang $m$) a un mineur $m\times m$ non nul ; si ce sont les lignes $l_1<\dots<l_m$, $S$ est localement un graphe au-dessus des coordonnées $(x_{l_1},\dots,x_{l_m})$. Le choix du poly ($dj_q=0$) donne en plus $df_{i(q)}=dj_q\circ d\Phi_{i(q)}=0$ : le graphe est « horizontal » en $p$.

## Preuve à trous

Soit $x:U\to V\cap S$ un paramétrage local en $p$, $q=x^{-1}(p)$. On choisit un isomorphisme linéaire $A$ de $\R^N$ tel que <trou indice="que doit faire A^{-1} à l'image de dx_q ?">$A^{-1}(dx_q(\R^m))=\R^m\times\{0\}$</trou>, et on écrit $A^{-1}\circ x=(i,j)$. Alors $A^{-1}\circ dx_q=(di_q,dj_q)$ est un isomorphisme de $\R^m$ sur $\R^m\times\{0\}$, donc <trou>$dj_q=0$ et $di_q$ est un isomorphisme de $\R^m$</trou>.

Par <trou indice="quel théorème transforme une différentielle inversible en difféomorphisme local ?">le théorème d'inversion locale, $i$ est un $C^k$-difféomorphisme d'un ouvert $U'\ni q$ sur un ouvert $U_1$, d'inverse $\Phi$</trou>. Pour $u_1\in U_1$ :
$$
A^{-1}\circ x\circ\Phi(u_1)=(u_1,\ j\circ\Phi(u_1)),
$$
donc avec <trou>$f=j\circ\Phi$, on a $x(U')=\{A((u_1,f(u_1))) ;\ u_1\in U_1\}$</trou>. Enfin, $x$ étant un homéomorphisme sur $V\cap S$, <trou indice="x(U') est ouvert dans quoi ?">$x(U')$ est un ouvert de $S$, donc de la forme $V_0\cap S$ avec $V_0$ ouvert de $\R^N$ contenant $p$</trou>, ce qui donne $V_0\cap S=V_0\cap A(\mathrm{Graphe}(f))$. $\square$

## Exemples

* **La preuve sur la sphère.** $S=\mathbb S^2$, $x(\theta,\varphi)=(\cos\theta\cos\varphi,\ \sin\theta\cos\varphi,\ \sin\varphi)$ sur $U=]-\frac\pi2,\frac\pi2[^2$, $q=(0,0)$, $p=(1,0,0)$. On a $\partial_\theta x(0,0)=(0,1,0)$, $\partial_\varphi x(0,0)=(0,0,1)$, donc $E=\{0\}\times\R^2$. On prend $A(a,b,c)=(c,a,b)$ (qui envoie $e_1,e_2,e_3$ sur $e_2,e_3,e_1$), $A^{-1}(X,Y,Z)=(Y,Z,X)$. Alors $A^{-1}\circ x=(\underbrace{\sin\theta\cos\varphi,\ \sin\varphi}_{i},\ \underbrace{\cos\theta\cos\varphi}_{j})$, avec $di_{(0,0)}=\mathrm{Id}$ et $dj_{(0,0)}=0$. En inversant $(a,b)=i(\theta,\varphi)$ : $\varphi=\arcsin b$, $\sin\theta=a/\sqrt{1-b^2}$, d'où $j=\sqrt{1-b^2}\sqrt{1-\frac{a^2}{1-b^2}}=\sqrt{1-a^2-b^2}$ sur $U_1=\{a^2+b^2<1\}$. Finalement $A((a,b,f(a,b)))=(\sqrt{1-a^2-b^2},a,b)$ : l'hémisphère $\{X>0\}$ est le graphe de $f(a,b)=\sqrt{1-a^2-b^2}$ au-dessus du plan $(Y,Z)$.
* **Lecture par les mineurs (cercle).** $x(t)=(\cos t,\sin t)$, $x'(t_0)=(-\sin t_0,\cos t_0)$. Si $\sin t_0\neq0$, la première coordonnée a une dérivée non nulle : près de $x(t_0)$, $\mathbb S^1$ est un graphe $y=f(x)$ (ici $f(x)=\pm\sqrt{1-x^2}$). Si $\cos t_0\neq0$, c'est un graphe $x=g(y)$. En $(\pm1,0)$ seul le second marche ; en $(0,\pm1)$ seul le premier.
* **Hyperboloïde à une nappe** $S=\{X^2+Y^2-Z^2=1\}$. En un point avec $X\neq0$, par exemple $X>0$, on a localement $X=\sqrt{1+Z^2-Y^2}$, graphe au-dessus du plan $(Y,Z)$ (sur l'ouvert $\{1+Z^2-Y^2>0\}$, avec $V=\{X>0\}$). Mais près de $(1,0,0)$, $S$ n'est **pas** un graphe $Z=f(X,Y)$ : les points $(\sqrt{1+t^2},0,\pm t)$ ont mêmes $(X,Y)$-coordonnées.

## Pièges

* > ⚠️ Le résultat est **local** : le cercle n'est globalement le graphe d'aucune fonction (au-dessus d'aucune droite), et il faut en général changer de plan de projection d'un point à l'autre.
* > ⚠️ On ne peut pas imposer $A=\id$ : au point $(1,0)$, le cercle n'est pas un graphe $y=f(x)$ ; c'est un graphe $x=g(y)$ ($A$ = échange des coordonnées). Le critère pour qu'un plan de coordonnées convienne : la projection de $dx_q(\R^m)$ sur ce plan (parallèlement aux autres axes) doit être un isomorphisme, i.e. le mineur jacobien correspondant de $dx_q$ doit être non nul.
* La fonction $f$ est définie sur un ouvert $U$ de $\R^m$ (le « sol »), pas sur un ouvert de $\R^N$ ; et elle a la même classe $C^k$ que $S$, pas mieux.
* Ne pas confondre avec la description par équations ([[ch09-sous-variete-localement-equation]]) : un graphe donne aussi une équation, $\Psi(z)=\pi_2(A^{-1}z)-f(\pi_1(A^{-1}z))=0$.
