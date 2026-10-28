---
id: ch01-goursat
type: theorem
chapter: 1
title: "Théorème de Goursat (1900) : $\C$-dérivable en tout point $\Rightarrow$ holomorphe"
ref: Exercice I.8.2
page: 23
importance: 2
depends: [ch01-morera, ch01-def-c-derivable, ch01-def-holomorphe, ch01-integrale-reparametrage-oppose-concatenation, ch01-longueur-majoration-integrale, ch01-integrale-primitive]
tags: [goursat, morera, triangle, holomorphe, subdivision]
---
## Intuition

> 💡 Dans la définition d'une fonction **holomorphe** ([[ch01-def-holomorphe]]), on demande que $f$ soit $\C$-dérivable en tout point ([[ch01-def-c-derivable]]) **et** que $f'$ soit continue. Goursat montre que la seconde exigence est gratuite : la $\C$-dérivabilité en chaque point suffit. C'est très différent du cas réel, où $x\mapsto x^2\sin(1/x)$ est dérivable partout avec une dérivée discontinue en $0$.

L'image : on découpe un triangle en $4$, puis en $16$, puis en $4^n$ petits triangles. Si l'intégrale de $f$ sur le bord du grand triangle valait $I\neq0$, l'un des $4^n$ petits triangles porterait au moins $|I|/4^n$. Mais au voisinage d'un point $z_0$ où $f$ est $\C$-dérivable, $f$ est « affine à $o(|z-z_0|)$ près », et une fonction affine a une intégrale nulle sur un lacet : la contribution d'un petit triangle de côté $\sim 2^{-n}$ est en $o(2^{-n}\cdot2^{-n})=o(4^{-n})$. Contradiction, donc $I=0$, et le **théorème de Morera** ([[ch01-morera]]) conclut.

Vocabulaire. Pour $a,b,c\in\C$, le **triangle plein** $T$ de sommets $a,b,c$ est l'enveloppe convexe $\{\lambda a+\mu b+\nu c : \lambda,\mu,\nu\ge0,\ \lambda+\mu+\nu=1\}$ ; c'est un compact. Son **bord orienté** est le lacet $\partial T=[a,b]\vee[b,c]\vee[c,a]$ (concaténation des trois segments, [[ch01-def-chemins-composables]]), et on note
$$
I(T):=\int_{\partial T}f(z)\,dz=\int_{[a,b]}f(z)\,dz+\int_{[b,c]}f(z)\,dz+\int_{[c,a]}f(z)\,dz .
$$

## Énoncé

**Théorème (poly, Exercice I.8.2, p. 23).** Soit $\Omega$ un ouvert de $\C$. Si $f:\Omega\to\C$ est une fonction continue admettant une dérivée au sens complexe $f'(z)$ en tout point $z\in\Omega$, alors $f$ est holomorphe sur $\Omega$ (autrement dit, $f'$ est automatiquement continue, et même $f\in C^\infty$).

Le poly demande de le démontrer « en utilisant l'exercice précédent », c'est-à-dire le théorème de Morera ([[ch01-morera]]) : *si $f$ est continue sur $\Omega$ et si $I(T)=0$ pour tout triangle plein $T\subset\Omega$, alors $f$ est holomorphe sur $\Omega$.*

## Hypothèses

### H1 — $f$ continue sur $\Omega$

**Rôle.** Elle est exigée par le théorème de Morera et elle garantit que les intégrales $\int_{[a,b]}f(z)\,dz$ ont un sens (Définition I.5.4 : intégrale d'une fonction **continue** le long d'un chemin, [[ch01-def-integrale-chemin]]).

**Si on la retire.** La conclusion reste vraie : cette hypothèse est **redondante**. En effet, si $f$ est $\C$-dérivable en $z$, alors $f(z+\omega)-f(z)=\omega\cdot\dfrac{f(z+\omega)-f(z)}{\omega}\to0\cdot f'(z)=0$ quand $\omega\to0$, donc $f$ est continue en $z$. (Le poly l'inclut d'ailleurs dans sa définition de la $\C$-dérivabilité, p. 5.)

### H2 — $f$ est $\C$-dérivable en **tout** point de $\Omega$

**Rôle.** C'est elle qui fournit, au point limite $z_0$ de la suite de triangles emboîtés, le développement $f(z)=f(z_0)+f'(z_0)(z-z_0)+o(|z-z_0|)$ qui rend $I(T_n)$ petit devant $4^{-n}$. Comme on ne sait pas d'avance où se trouve $z_0$, il faut la dérivabilité **partout**.

**Si on la retire.** La fonction $f(z)=|z|^2=z\bar z$ est continue sur $\C$, $\C$-dérivable en $0$ (car $\frac{f(\omega)-f(0)}{\omega}=\bar\omega\to0$) mais en aucun autre point ([[ch01-exemple-zbar-rez-module]]) : elle n'est holomorphe sur aucun ouvert. Vérifions que l'intégrale sur un triangle n'est pas nulle : pour le triangle $T$ de sommets $0,1,i$, on a $\int_{[0,1]}|z|^2dz=\int_0^1t^2dt=\frac13$, $\int_{[1,i]}|z|^2dz=\int_0^1\big((1-t)^2+t^2\big)(i-1)\,dt=\frac23(i-1)$, $\int_{[i,0]}|z|^2dz=\int_0^1(1-t)^2(-i)\,dt=-\frac i3$, d'où $I(T)=\frac13-\frac23+\frac{2i}3-\frac i3=\frac{-1+i}{3}\neq0$.

## Idée de la preuve

On montre $I(T)=0$ pour tout triangle plein $T\subset\Omega$ (lemme de Goursat), puis on applique Morera. Pour le lemme : subdivision de $T$ en $4$ triangles par les milieux des côtés, on garde celui où $|I|$ est maximal ($\ge|I(T)|/4$), on itère ; les triangles se contractent sur un point $z_0$ où le DL $f(z)=f(z_0)+f'(z_0)(z-z_0)+\eps(z)(z-z_0)$ donne $|I(T_n)|=o(4^{-n})$.

## Preuve

*Le poly ne détaille pas cette preuve (c'est un exercice) ; on donne la preuve classique de Goursat, qui suit l'indication « utiliser Morera ».*

**Étape 0 : réduction.** D'après le théorème de Morera ([[ch01-morera]]), il suffit de montrer que $I(T)=0$ pour tout triangle plein $T\subset\Omega$, de sommets $a,b,c$ (H1 donne la continuité requise par Morera).

**Étape 1 : subdivision.** Notons $a'=\frac{b+c}2$, $b'=\frac{a+c}2$, $c'=\frac{a+b}2$ les milieux des côtés, et $T^{(1)},T^{(2)},T^{(3)},T^{(4)}$ les triangles pleins de sommets respectifs $(a,c',b')$, $(c',b,a')$, $(b',a',c)$, $(a',b',c')$, tous contenus dans $T$ (par convexité) donc dans $\Omega$. Alors
$$
I(T)=I(T^{(1)})+I(T^{(2)})+I(T^{(3)})+I(T^{(4)}).
$$
En effet, en développant les bords : $\int_{[a,c']}+\int_{[c',b]}=\int_{[a,b]}$ (additivité par concaténation, après reparamétrage, [[ch01-integrale-reparametrage-oppose-concatenation]]), de même pour les deux autres côtés de $T$ ; et les segments intérieurs $[c',b'],[a',c'],[b',a']$ apparaissent chacun une fois dans chaque sens, donc leurs contributions s'annulent (changement de signe par le chemin opposé, même proposition).

Par l'inégalité triangulaire, l'un au moins des $T^{(j)}$, que l'on note $T_1$, vérifie $|I(T_1)|\ge\frac14|I(T)|$. Chaque côté de $T_1$ est la moitié d'un côté de $T$ (théorème des milieux), donc, en notant $d(\cdot)$ le diamètre (= plus grand côté) et $p(\cdot)$ le périmètre (= longueur $L(\partial\,\cdot)$ du bord) :
$$
d(T_1)=\tfrac12 d(T),\qquad p(T_1)=\tfrac12 p(T).
$$

**Étape 2 : itération.** En recommençant avec $T_1$ à la place de $T$, et ainsi de suite, on construit une suite décroissante de triangles pleins $T=T_0\supset T_1\supset T_2\supset\cdots$ tels que, pour tout $n$,
$$
|I(T_n)|\ge 4^{-n}|I(T)|,\qquad d(T_n)=2^{-n}d(T),\qquad p(T_n)=2^{-n}p(T).
$$

**Étape 3 : point limite.** Les $T_n$ sont des compacts non vides emboîtés, donc $\bigcap_nT_n\neq\emptyset$ ; comme $d(T_n)\to0$, cette intersection est réduite à un point $z_0$, et $z_0\in T\subset\Omega$.

**Étape 4 : DL en $z_0$.** Par H2, $f$ est $\C$-dérivable en $z_0$. Posons $\eps(z_0)=0$ et, pour $z\in\Omega\setminus\{z_0\}$, $\eps(z)=\dfrac{f(z)-f(z_0)}{z-z_0}-f'(z_0)$. La fonction $\eps$ est continue sur $\Omega$ (continuité de $f$ hors de $z_0$, définition de $f'(z_0)$ en $z_0$) et
$$
f(z)=f(z_0)+f'(z_0)(z-z_0)+\eps(z)(z-z_0)\qquad(z\in\Omega).
$$
La fonction affine $z\mapsto f(z_0)+f'(z_0)(z-z_0)$ admet la primitive holomorphe (polynomiale) $z\mapsto f(z_0)z+\frac12f'(z_0)(z-z_0)^2$, donc son intégrale sur le lacet $\partial T_n$ est nulle ([[ch01-integrale-primitive]]). Il reste
$$
I(T_n)=\int_{\partial T_n}\eps(z)(z-z_0)\,dz .
$$
Pour $z\in\partial T_n$, on a $|z-z_0|\le d(T_n)$ puisque $z_0\in T_n$. La majoration fondamentale ([[ch01-longueur-majoration-integrale]]) donne
$$
|I(T_n)|\le \sup_{\partial T_n}|\eps|\cdot d(T_n)\cdot p(T_n)=4^{-n}\,d(T)\,p(T)\,\sup_{T_n}|\eps| .
$$

**Étape 5 : conclusion.** En combinant avec l'étape 2 :
$$
|I(T)|\le 4^n|I(T_n)|\le d(T)\,p(T)\,\sup_{T_n}|\eps| .
$$
Soit $\eta>0$ ; par continuité de $\eps$ en $z_0$ et $\eps(z_0)=0$, il existe $\delta>0$ tel que $|\eps|\le\eta$ sur $D(z_0,\delta)\cap\Omega$ ; pour $n$ assez grand, $T_n\subset\bar D(z_0,d(T_n))\subset D(z_0,\delta)$, donc $|I(T)|\le d(T)p(T)\eta$. Ceci valant pour tout $\eta>0$, $I(T)=0$.

Le cas d'un triangle aplati ($a,b,c$ alignés) est couvert par le même raisonnement (ou directement par Chasles). Par Morera, $f$ est holomorphe sur $\Omega$. $\square$

## Preuve à trous

Par Morera, il suffit de montrer $I(T)=0$ pour tout triangle plein $T\subset\Omega$. On découpe $T$ en quatre triangles par les milieux des côtés ; on a <trou indice="que deviennent les intégrales sur les segments intérieurs ?">$I(T)=\sum_{j=1}^4I(T^{(j)})$, car les segments intérieurs sont parcourus une fois dans chaque sens</trou>, donc l'un d'eux, $T_1$, vérifie $|I(T_1)|\ge\frac14|I(T)|$, avec diamètre et périmètre divisés par $2$. En itérant, on obtient des triangles emboîtés $T_n$ avec <trou>$|I(T_n)|\ge4^{-n}|I(T)|$, $d(T_n)=2^{-n}d(T)$, $p(T_n)=2^{-n}p(T)$</trou>, qui se contractent sur un point $z_0\in\Omega$.

En $z_0$, $f(z)=f(z_0)+f'(z_0)(z-z_0)+\eps(z)(z-z_0)$ avec $\eps$ continue, $\eps(z_0)=0$. La partie affine <trou indice="elle a une primitive">a une intégrale nulle sur le lacet $\partial T_n$, car elle admet une primitive polynomiale</trou>, d'où $|I(T_n)|=\big|\int_{\partial T_n}\eps(z)(z-z_0)\,dz\big|\le$ <trou indice="majoration sup × longueur, et $|z-z_0|\le d(T_n)$">$\sup_{T_n}|\eps|\cdot d(T_n)\,p(T_n)=4^{-n}d(T)p(T)\sup_{T_n}|\eps|$</trou>.
Donc $|I(T)|\le d(T)p(T)\sup_{T_n}|\eps|\to0$ quand $n\to\infty$ : $I(T)=0$, et Morera conclut. $\square$

## Exemples

* **Le cas réel est faux.** $g(x)=x^2\sin(1/x)$ ($g(0)=0$) est dérivable sur $\R$ : $g'(0)=\lim_{x\to0}x\sin(1/x)=0$ et $g'(x)=2x\sin(1/x)-\cos(1/x)$ pour $x\neq0$, qui n'a pas de limite en $0$. La dérivée existe partout mais n'est pas continue. En complexe, Goursat interdit ce phénomène.
* **Fonction définie par morceaux.** Soit $f(z)=\dfrac{\sin z}{z}$ pour $z\neq0$ et $f(0)=1$. Pour montrer que $f$ est holomorphe sur $\C$, il suffit (par Goursat) de vérifier la $\C$-dérivabilité en chaque point : hors de $0$ c'est un quotient de fonctions holomorphes ; en $0$, $\sin z=z-\frac{z^3}6+z^5h(z)$ avec $h$ entière, donc $\frac{f(\omega)-f(0)}{\omega}=-\frac{\omega}{6}+\omega^3h(\omega)\to0$. On n'a pas besoin de vérifier à la main la continuité de $f'$ en $0$.
* **Où ça sert.** Le théorème des singularités effaçables de Riemann ([[ch02-singularite-effacable-riemann]]) et, plus généralement, toute situation où l'on obtient la $\C$-dérivabilité point par point (limites, prolongements) sans contrôle de $f'$.

## Pièges

* > ⚠️ « $\C$-dérivable en **tout** point de l'ouvert » : la dérivabilité en un point isolé (comme $|z|^2$ en $0$) ou sur une partie sans intérieur ne dit rien.
* Ne pas confondre avec Morera : Morera suppose $I(T)=0$ pour tous les triangles et en déduit l'holomorphie ; Goursat **démontre** $I(T)=0$ à partir de la $\C$-dérivabilité, puis applique Morera.
* Dans la preuve, on ne peut pas utiliser la formule de Cauchy ou le théorème I.7.4 pour $f$ elle-même : ils supposent $f$ holomorphe (donc $f'$ continue), ce qu'on cherche justement à établir. Seules les fonctions affines (primitive explicite) et Morera sont utilisées.
* L'inégalité $|I(T_n)|\ge4^{-n}|I(T)|$ vient du choix du « pire » sous-triangle à chaque étape : sans ce choix, on n'a aucun contrôle.
