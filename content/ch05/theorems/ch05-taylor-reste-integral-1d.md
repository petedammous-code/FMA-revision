---
id: ch05-taylor-reste-integral-1d
type: lemma
chapter: 5
title: Formule de Taylor avec reste intégral pour une fonction d'une variable réelle (à valeurs Banach)
ref: Lemme V.5.9
page: 110
importance: 2
depends: [ch05-theoreme-fondamental, ch05-derivee-variable-reelle, ch05-formule-leibniz, ch05-integrale-fonctions-reglees]
tags: [taylor, reste-integral, variable-reelle, banach, integrale]
---
## Intuition

> 💡 Le théorème fondamental dit $f(1)=f(0)+\int_0^1f'(t)\,dt$ : la valeur finale est la valeur initiale plus la somme des variations. Taylor raffine cela : on prédit $f(1)$ par le polynôme $f(0)+f'(0)+\frac{f''(0)}{2!}+\cdots+\frac{f^{(p)}(0)}{p!}$, et l'**erreur exacte** s'écrit comme une intégrale de la dérivée suivante $f^{(p+1)}$, pondérée par le poids $\frac{(1-t)^p}{p!}$ qui s'annule en $t=1$.

L'astuce : la fonction $g(t)=\sum_{k=0}^p\frac{(1-t)^k}{k!}f^{(k)}(t)$ est « le polynôme de Taylor de $f$ en $t$, évalué au point $1$ ». En $t=1$ elle vaut $f(1)$, en $t=0$ elle vaut le polynôme de Taylor en $0$ ; et sa dérivée se **télescope** en un seul terme.

Vocabulaire. Pour $f:I\to F$ définie sur un intervalle ouvert $I\subset\R$, la dérivée est $f'(t)=df_t(1)\in F$ ([[ch05-derivee-variable-reelle]]) ; $f^{(k)}$ est la dérivée $k$-ième. Via l'identification isométrique $\mathcal L(\R;F)\simeq F$, $u\mapsto u(1)$, « $f$ de classe $C^{p+1}$ » signifie que $f^{(p+1)}$ existe et est continue sur $I$. L'intégrale d'une fonction continue $[0,1]\to F$, $F$ espace de Banach (evn complet), est celle des fonctions réglées ([[ch05-integrale-fonctions-reglees]]).

## Énoncé

**Lemme (poly, Lemme V.5.9, p. 110).** Soit $f$ une fonction d'un intervalle ouvert $I$ contenant $0$ et $1$, à valeurs dans un espace de Banach $F$ et de classe $C^{p+1}$. On a alors
$$
f(1)-f(0)-f'(0)-\frac{f''(0)}{2!}-\cdots-\frac{f^{(p)}(0)}{p!}=\int_0^1\frac{(1-t)^p}{p!}\,f^{(p+1)}(t)\,dt.
$$

## Hypothèses

### H1 — $f$ de classe $C^{p+1}$ sur $I$

**Rôle.** Elle rend $g(t)=\sum_{k=0}^p\frac{(1-t)^k}{k!}f^{(k)}(t)$ de classe $C^1$ (chaque $f^{(k)}$, $k\le p$, est $C^1$), ce qu'exige le théorème fondamental ([[ch05-theoreme-fondamental]]) ; et elle rend l'intégrande continu, donc intégrable.

**Si on la retire.** Avec $p=0$, $F=\R$, $I=\left]-1,2\right[$ et $f(t)=t^2\sin(1/t^2)$ pour $t\neq0$, $f(0)=0$ : $f$ est dérivable partout ($f'(0)=\lim_{t\to0}t\sin(1/t^2)=0$) mais $f'(t)=2t\sin(1/t^2)-\frac2t\cos(1/t^2)$ pour $t\neq0$ n'est pas bornée sur $\left]0,1\right]$ (prendre $t_n=1/\sqrt{2n\pi}$ : $f'(t_n)=-2\sqrt{2n\pi}\to-\infty$). Une fonction réglée sur un segment est bornée, donc $f'$ n'est pas réglée et $\int_0^1f'(t)\,dt$ **n'a pas de sens** dans la théorie du poly. Si l'on veut seulement $f$ $(p+1)$ fois dérivable, il faut passer à l'inégalité de Taylor-Lagrange ([[ch05-taylor-lagrange-1d]]).

### H2 — $F$ est un espace de Banach

**Rôle.** L'intégrale des fonctions réglées à valeurs dans $F$ se construit par passage à la limite d'intégrales de fonctions en escalier : il faut que $F$ soit complet ([[ch05-integrale-fonctions-reglees]]).

**Si on la retire.** En général l'intégrale d'une fonction continue n'existe plus : dans $F=c_{00}$ (suites à support fini, norme $\norm{x}_1=\sum|x_n|$), la fonction $u(t)=\frac1n\varphi_n(t)\,e_n$ pour $t\in\left[\frac1{n+1},\frac1n\right]$ ($\varphi_n$ fonction « chapeau » de hauteur $1$ sur cet intervalle, $u(0)=0$) est continue sur $[0,1]$ (car $\norm{u(t)}_1\le\frac1n$ près de $0$), mais ses sommes de Riemann convergent dans $\ell^1$ vers $\sum_n\frac1{2n}\big(\frac1n-\frac1{n+1}\big)e_n$, qui n'est pas à support fini. Pour le lemme lui-même, l'hypothèse est en fait **de confort** : l'intégrande vaut $g'(t)$, et en calculant l'intégrale dans le complété de $F$ on trouve $g(1)-g(0)\in F$ ; la formule reste donc vraie, mais il faut sortir de $F$ pour définir l'intégrale.

### H3 — $I$ intervalle ouvert contenant $0$ et $1$

**Rôle.** Elle garantit $[0,1]\subset I$ (un intervalle contenant $0$ et $1$ contient le segment) et que les dérivées en $0$ et $1$ sont des dérivées ordinaires (bilatérales), comme dans le cadre « ouvert » du poly.

**Si on la retire.** Hypothèse de confort : pour $f$ de classe $C^{p+1}$ sur le seul segment $[0,1]$ (dérivées à droite en $0$, à gauche en $1$), la même preuve fonctionne. En revanche si $[0,1]\not\subset I$, $f$ n'est pas définie sur tout le chemin d'intégration et l'énoncé n'a pas de sens.

## Idée de la preuve

On applique le théorème fondamental ($\varphi(1)-\varphi(0)=\int_0^1\varphi'$) à $g(t)=\sum_{k=0}^p\frac{(1-t)^k}{k!}f^{(k)}(t)$, dont la dérivée se télescope en $\frac{(1-t)^p}{p!}f^{(p+1)}(t)$, et l'on remarque que $g(1)=f(1)$ et $g(0)=\sum_{k=0}^p\frac{f^{(k)}(0)}{k!}$.

## Preuve

Posons, pour $t\in I$,
$$
g(t)=\sum_{k=0}^p\frac{(1-t)^k}{k!}f^{(k)}(t)=f(t)+(1-t)f'(t)+\cdots+\frac{(1-t)^p}{p!}f^{(p)}(t).
$$
Chaque terme est le produit d'une fonction réelle $C^\infty$, $t\mapsto\frac{(1-t)^k}{k!}$, et de $f^{(k)}$, qui est $C^1$ pour $k\le p$ ($f$ étant $C^{p+1}$). Le produit $\R\times F\to F$, $(\lambda,v)\mapsto\lambda v$ étant bilinéaire continu, la formule de Leibniz ([[ch05-formule-leibniz]]) donne que $g$ est $C^1$ et, avec la convention que le premier terme est absent pour $k=0$,
$$
g'(t)=\sum_{k=0}^p\Big(-\frac{(1-t)^{k-1}}{(k-1)!}f^{(k)}(t)+\frac{(1-t)^k}{k!}f^{(k+1)}(t)\Big).
$$
En posant $a_k(t)=\frac{(1-t)^k}{k!}f^{(k+1)}(t)$, cette somme vaut $\sum_{k=0}^p a_k(t)-\sum_{k=1}^p a_{k-1}(t)=a_p(t)$ (somme télescopique), soit
$$
g'(t)=\frac{(1-t)^p}{p!}f^{(p+1)}(t).
$$
Appliquons le théorème fondamental du calcul différentiel ([[ch05-theoreme-fondamental]]) à $g$, de classe $C^1$ sur l'ouvert $I$ de $E=\R$, avec $x=0$, $y=1$ (on a bien $0+t\cdot1\in I$ pour $t\in[0,1]$), en notant $dg_t(1)=g'(t)$ :
$$
g(1)=g(0)+\int_0^1g'(t)\,dt.
$$
Or $g(1)=f(1)$ (pour $k\ge1$, $(1-1)^k=0$) et $g(0)=\sum_{k=0}^p\frac{f^{(k)}(0)}{k!}$. On obtient
$$
f(1)-\sum_{k=0}^p\frac{f^{(k)}(0)}{k!}=\int_0^1\frac{(1-t)^p}{p!}f^{(p+1)}(t)\,dt. \qquad\square
$$

## Preuve à trous

On introduit la fonction auxiliaire <trou indice="le polynôme de Taylor de f au point t, évalué en 1">$g(t)=\sum_{k=0}^p\frac{(1-t)^k}{k!}f^{(k)}(t)$</trou>, qui est $C^1$ car $f$ est $C^{p+1}$. Par Leibniz, sa dérivée est
$$
g'(t)=\sum_{k=0}^p\Big(-\frac{(1-t)^{k-1}}{(k-1)!}f^{(k)}(t)+\frac{(1-t)^k}{k!}f^{(k+1)}(t)\Big)=\ ?
$$
et <trou indice="somme télescopique">tous les termes se compensent sauf le dernier : $g'(t)=\frac{(1-t)^p}{p!}f^{(p+1)}(t)$</trou>. Le théorème fondamental donne $g(1)-g(0)=\int_0^1g'(t)\,dt$. Enfin <trou>$g(1)=f(1)$ car $(1-1)^k=0$ pour $k\ge1$, et $g(0)=\sum_{k=0}^p\frac{f^{(k)}(0)}{k!}$</trou>, d'où la formule. $\square$

## Exemples

* **L'exponentielle.** $f(t)=e^t$, $F=\R$ : $e-\sum_{k=0}^p\frac1{k!}=\int_0^1\frac{(1-t)^p}{p!}e^t\,dt$. Pour $p=1$ : $\int_0^1(1-t)e^t\,dt=\big[(1-t)e^t\big]_0^1+\int_0^1e^t\,dt=-1+(e-1)=e-2$, et en effet $e-1-1=e-2$. Comme $0<e^t\le e$ sur $[0,1]$ et $\int_0^1\frac{(1-t)^p}{p!}dt=\frac1{(p+1)!}$, on en déduit $0<e-\sum_{k=0}^p\frac1{k!}\le\frac{e}{(p+1)!}$.
* **À valeurs vectorielles.** $f(t)=e^{it}$, $F=\C\simeq\R^2$ (Banach), $p=1$ : $f'(t)=ie^{it}$, $f''(t)=-e^{it}$. La formule annonce $e^i-1-i=-\int_0^1(1-t)e^{it}\,dt$. Vérification : par parties, $\int_0^1(1-t)e^{it}dt=\big[(1-t)\tfrac{e^{it}}{i}\big]_0^1+\tfrac1i\int_0^1e^{it}dt=-\tfrac1i+\tfrac{e^i-1}{i^2}=i-e^i+1$, dont l'opposé est bien $e^i-1-i$.
* **Sur un segment quelconque.** Si $\varphi$ est $C^{p+1}$ sur un intervalle ouvert contenant $[a,b]$, appliquer le lemme à $f(s)=\varphi(a+s(b-a))$ (pour laquelle $f^{(k)}(s)=(b-a)^k\varphi^{(k)}(a+s(b-a))$) puis poser $u=a+s(b-a)$ donne la forme classique $\varphi(b)=\sum_{k=0}^p\frac{\varphi^{(k)}(a)}{k!}(b-a)^k+\int_a^b\frac{(b-u)^p}{p!}\varphi^{(p+1)}(u)\,du$.

## Pièges

* > ⚠️ Le poids est $\frac{(1-t)^p}{p!}$ (puissance $p$, factorielle $p!$), associé à $f^{(p+1)}$ (ordre $p+1$) : ne pas décaler les indices. Contrôle : $\int_0^1\frac{(1-t)^p}{p!}dt=\frac1{(p+1)!}$, le coefficient « attendu » du terme suivant.
* Pour $p=0$, c'est exactement le théorème fondamental $f(1)-f(0)=\int_0^1f'(t)\,dt$.
* À valeurs vectorielles (dès $\dim F\ge2$), il n'y a **pas** de « reste de Lagrange » $\frac{f^{(p+1)}(c)}{(p+1)!}$ avec un point intermédiaire $c$ : $f(t)=e^{2i\pi t}$ vérifie $f(1)-f(0)=0$ alors que $f'(c)=2i\pi e^{2i\pi c}\neq0$ pour tout $c$. La forme intégrale, elle, reste une **égalité**.
* La version en dimension quelconque ([[ch05-taylor-reste-integral]]) s'obtient en appliquant ce lemme à $t\mapsto f(a+th)$.
