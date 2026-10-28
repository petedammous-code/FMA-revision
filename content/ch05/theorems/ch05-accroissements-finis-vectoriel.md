---
id: ch05-accroissements-finis-vectoriel
type: theorem
chapter: 5
title: Inégalité des accroissements finis pour une fonction d'une variable réelle à valeurs vectorielles
ref: Théorème V.4.1
page: 103
importance: 2
depends: [ch05-differentielle-def, ch05-derivee-variable-reelle]
tags: [accroissements-finis, inegalite, variable-reelle, dichotomie, evn]
---
## Intuition

> 💡 Deux mobiles partent au même instant $a$ : un point $f(t)$ qui se déplace dans un espace vectoriel normé $F$, et un point $g(t)$ sur la droite réelle. Si, à chaque instant, la **vitesse** de $f$ (en norme) est inférieure à la vitesse de $g$, alors la **distance à vol d'oiseau** parcourue par $f$ entre $a$ et $b$ est inférieure au chemin parcouru par $g$ : $\|f(b)-f(a)\|_F\le g(b)-g(a)$.

C'est la bonne généralisation du théorème des accroissements finis aux fonctions à valeurs vectorielles : l'**égalité** $f(b)-f(a)=(b-a)f'(c)$ est fausse dès que $F$ est de dimension $\ge2$ (le point $e^{it}$ fait un tour complet du cercle et revient à son point de départ, alors que sa vitesse ne s'annule jamais), mais l'**inégalité** survit.

Notations : pour $f$ définie sur un intervalle de $\R$ et différentiable en $t$, on note $f'(t)=df_t(1)\in F$ le vecteur dérivé, de sorte que $df_t(s)=s\,f'(t)$ et $\|df_t\|_{\mathcal L(\R;F)}=\|f'(t)\|_F$ ([[ch05-derivee-variable-reelle]]). « Différentiable » est pris au sens de [[ch05-differentielle-def]].

## Énoncé

**Théorème (poly, Théorème V.4.1, p. 103).** Soient $a$ et $b$ deux réels avec $a<b$, et $F$ un espace vectoriel normé. Soient $f:[a;b]\to F$ et $g:[a;b]\to\R$ deux applications continues sur $[a;b]$ et différentiables sur $]a;b[$. Supposons que pour tout $t\in\,]a;b[$, $\|f'(t)\|_F\le g'(t)$. Alors
$$
\|f(b)-f(a)\|_F\le g(b)-g(a).
$$

## Hypothèses

### H1 — $f$ et $g$ continues sur le segment fermé $[a;b]$

**Rôle.** La preuve établit d'abord l'inégalité sur tout $[u;v]\subset\,]a;b[$, puis fait tendre $u\to a$ et $v\to b$ : c'est la continuité de $f$ et $g$ **aux bornes** qui permet ce passage à la limite.

**Si on la retire.** Sur $[0;1]$, $F=\R$, $f=\mathbf 1_{\{1\}}$ (nulle sur $[0;1[$, égale à $1$ en $1$) et $g=0$ : sur $]0;1[$, $f'=0=g'$, mais $|f(1)-f(0)|=1>0=g(1)-g(0)$. Côté $g$ : $f(t)=t$, $g(t)=t$ sur $[0;1[$ et $g(1)=0$ ; alors $f'=1\le1=g'$ sur $]0;1[$ mais $|f(1)-f(0)|=1>g(1)-g(0)=0$.

### H2 — $f$ et $g$ différentiables en tout point de $]a;b[$

**Rôle.** La contradiction est obtenue en un point $w\in\,]a;b[$ produit par dichotomie, **qu'on ne contrôle pas** : il faut pouvoir y développer $f$ et $g$ au premier ordre, donc qu'elles y soient différentiables.

**Si on la retire.** L'escalier de Cantor $c:[0;1]\to[0;1]$ est continu, croissant, avec $c(0)=0$, $c(1)=1$ ; il est constant sur chaque intervalle ouvert du complémentaire de l'ensemble de Cantor $K$, donc dérivable de dérivée nulle sur $[0;1]\setminus K$. Avec $f=c$, $g=0$ : $|f'|\le g'$ partout où $f'$ existe, mais $|f(1)-f(0)|=1>0$. L'ensemble $K$ des points de non-dérivabilité est non dénombrable : c'est cohérent avec la Remarque V.4.2 du poly, qui autorise un ensemble **dénombrable** de points exceptionnels ([[ch05-accroissements-finis-denombrable]]).

### H3 — La majoration ponctuelle $\|f'(t)\|_F\le g'(t)$ sur $]a;b[$

**Rôle.** C'est le cœur de la preuve : au point $w$, le premier ordre de l'« excès » $\|f(s)-f(w)\|-(g(s)-g(w))$ est majoré par $(\|f'(w)\|-g'(w))|s-w|\le0$.

**Si on la retire.** Évidemment faux en général : $f(t)=2t$, $g(t)=t$ sur $[0;1]$ donnent $|f(1)-f(0)|=2>1$. Si la majoration n'est violée qu'en un nombre dénombrable de points, la conclusion subsiste (Remarque V.4.2).

### H4 — $F$ espace vectoriel normé quelconque

**Rôle.** La preuve n'utilise que l'inégalité triangulaire et la définition de la différentielle : **aucune complétude** n'est requise, contrairement aux preuves passant par l'intégrale ([[ch05-integrale-fonctions-reglees]]).

**Si on la retire.** Rien à retirer : c'est une absence d'hypothèse, à remarquer. En revanche $g$ doit être **à valeurs réelles** (on compare $g'(t)$, un réel, à une norme).

## Idée de la preuve

On raisonne par l'absurde sur un sous-segment $[u;v]\subset\,]a;b[$ où l'« excès » $\|f(v)-f(u)\|-(g(v)-g(u))$ vaut $M>0$. Par dichotomie, on garde à chaque étape une moitié où l'excès reste $\ge M/2^k$ ; les segments se resserrent sur un point $w$ où le développement au premier ordre montre que l'excès est $o(v_k-u_k)=o(2^{-k})$ : contradiction.

## Preuve

Pour $a\le u\le v\le b$, posons $\Phi(u,v)=\|f(v)-f(u)\|_F-\big(g(v)-g(u)\big)$. Pour tout $m\in[u;v]$, l'inégalité triangulaire et l'égalité $g(v)-g(u)=(g(v)-g(m))+(g(m)-g(u))$ donnent la **sous-additivité**
$$
\Phi(u,v)\le\Phi(u,m)+\Phi(m,v).\qquad(\ast)
$$

*Étape 1 : réduction.* Montrons que $\Phi(u,v)\le0$ pour tous $u,v$ tels que $a<u<v<b$. Le résultat s'en déduira : en faisant tendre $u$ vers $a$ et $v$ vers $b$, la continuité de $f$ et $g$ sur $[a;b]$ (et celle de la norme) donne $\Phi(a,b)=\lim\Phi(u,v)\le0$, c'est-à-dire $\|f(b)-f(a)\|_F\le g(b)-g(a)$.

*Étape 2 : dichotomie.* Raisonnons par l'absurde : supposons qu'il existe $a<u<v<b$ avec $\Phi(u,v)=M>0$. Posons $m=\frac{u+v}2$. D'après $(\ast)$, on a nécessairement $\Phi(u,m)\ge\frac M2$ ou $\Phi(m,v)\ge\frac M2$. Notons $[u_1;v_1]$ un intervalle (parmi $[u;m]$ et $[m;v]$) sur lequel cette inégalité est vérifiée, et réitérons le procédé. On construit ainsi une suite d'intervalles emboîtés $[u_k;v_k]\subset[u;v]$ avec
$$
\Phi(u_k,v_k)\ge\frac{M}{2^k}\qquad\text{et}\qquad v_k-u_k=\frac{v-u}{2^k}.
$$
La suite $(u_k)$ est croissante, $(v_k)$ décroissante, et $v_k-u_k\to0$ : elles convergent vers un même point $w$, avec $u_k\le w\le v_k$ pour tout $k$. De plus $w\in[u;v]\subset\,]a;b[$, donc $f$ et $g$ sont différentiables en $w$.

*Étape 3 : contradiction au point $w$.* Soit $\eps>0$. Par différentiabilité de $f$ et $g$ en $w$, il existe $\delta>0$ tel que pour tout $s\in\,]a;b[$ avec $|s-w|<\delta$,
$$
\|f(s)-f(w)-(s-w)f'(w)\|_F\le\eps|s-w|,\qquad|g(s)-g(w)-(s-w)g'(w)|\le\eps|s-w|.
$$
Pour $k$ assez grand, $v_k-u_k<\delta$, donc $|v_k-w|<\delta$ et $|w-u_k|<\delta$. On obtient alors, par l'inégalité triangulaire,
$$
\begin{aligned}
\Phi(w,v_k)&\le(v_k-w)\|f'(w)\|_F+\eps(v_k-w)-\big((v_k-w)g'(w)-\eps(v_k-w)\big)\\
&=(v_k-w)\big(\|f'(w)\|_F-g'(w)\big)+2\eps(v_k-w)\le2\eps(v_k-w),
\end{aligned}
$$
où la dernière inégalité utilise l'hypothèse $\|f'(w)\|_F\le g'(w)$. De même $\Phi(u_k,w)\le2\eps(w-u_k)$. Avec $(\ast)$ (pour le point $w\in[u_k;v_k]$) :
$$
\frac{M}{2^k}\le\Phi(u_k,v_k)\le\Phi(u_k,w)+\Phi(w,v_k)\le2\eps(v_k-u_k)=2\eps\,\frac{v-u}{2^k}.
$$
En multipliant par $2^k$ : $M\le2\eps(v-u)$. Ceci vaut pour tout $\eps>0$, donc $M\le0$ : contradiction avec $M>0$. Ainsi $\Phi(u,v)\le0$ pour tous $a<u<v<b$, et l'étape 1 conclut. $\square$

*Remarque sur la rédaction du poly.* Le poly écrit la même majoration sous la forme $\frac{M}{2^k}\le(\|df_w\|-g'(w))(v_k-u_k)+o(v_k-u_k)$, avec $\|df_w\|=\|f'(w)\|_F$ ; diviser par $v_k-u_k=\frac{v-u}{2^k}$ donne $\frac{M}{v-u}\le(\|df_w\|-g'(w))+o(1)\le o(1)$, d'où la contradiction. La version ci-dessus rend explicite le $o$.

## Preuve à trous

Posons $\Phi(u,v)=\|f(v)-f(u)\|_F-(g(v)-g(u))$. Par l'inégalité triangulaire, pour $m\in[u;v]$, <trou indice="comment se comporte Φ quand on coupe [u;v] en m ?">$\Phi(u,v)\le\Phi(u,m)+\Phi(m,v)$</trou>.

Il suffit de montrer $\Phi(u,v)\le0$ pour $a<u<v<b$, puis de <trou indice="quelle hypothèse sert aux bornes ?">faire tendre $u\to a$, $v\to b$ grâce à la continuité de $f$ et $g$ sur $[a;b]$</trou>.

Par l'absurde, soit $\Phi(u,v)=M>0$. En coupant en deux et en gardant à chaque fois une moitié où l'excès reste grand, on construit des intervalles emboîtés $[u_k;v_k]$ avec <trou>$\Phi(u_k,v_k)\ge M/2^k$ et $v_k-u_k=(v-u)/2^k$</trou> ; ils convergent vers un point $w\in[u;v]\subset\,]a;b[$.

Soit $\eps>0$. Pour $k$ grand, la différentiabilité de $f$ et $g$ en $w$ et l'hypothèse $\|f'(w)\|_F\le g'(w)$ donnent <trou indice="développer f et g au premier ordre en w">$\Phi(w,v_k)\le(v_k-w)(\|f'(w)\|_F-g'(w))+2\eps(v_k-w)\le2\eps(v_k-w)$, et de même $\Phi(u_k,w)\le2\eps(w-u_k)$</trou>. D'où $\frac M{2^k}\le2\eps\frac{v-u}{2^k}$, soit $M\le2\eps(v-u)$ pour tout $\eps>0$ : <trou>$M\le0$, contradiction</trou>. $\square$

## Exemples

* **Corde et cercle.** $f(t)=e^{it}\in\C\simeq\R^2$ (norme euclidienne = module), $g(t)=t$, sur $[0;\theta]$ avec $\theta>0$. On a $f'(t)=ie^{it}$, $|f'(t)|=1=g'(t)$. Le théorème donne $|e^{i\theta}-1|\le\theta$, c'est-à-dire $2|\sin(\theta/2)|\le\theta$ : la corde est plus courte que l'arc. En revanche $f(2\pi)-f(0)=0$ alors que $f'$ ne s'annule jamais : **pas d'égalité** des accroissements finis.
* **Une majoration optimale.** $F=\R^2$ muni de $\|(x,y)\|_1=|x|+|y|$, $f(t)=(\cos t,\sin t)$ sur $[0;\pi/2]$. Alors $\|f'(t)\|_1=|\sin t|+|\cos t|=\sin t+\cos t=g'(t)$ avec $g(t)=\sin t-\cos t$. Le théorème donne $\|f(\pi/2)-f(0)\|_1\le g(\pi/2)-g(0)=1-(-1)=2$, et en effet $\|(-1,1)\|_1=2$ : l'inégalité est ici une égalité.
* **Longueur d'une courbe.** Si $F$ est de Banach et $f:[a;b]\to F$ est de classe $C^1$, on peut prendre $g(t)=\int_a^t\|f'(s)\|_F\,ds$ (qui est dérivable de dérivée $\|f'(t)\|_F$ par [[ch05-primitive-integrale]]). On obtient $\|f(b)-f(a)\|_F\le\int_a^b\|f'(s)\|_F\,ds$ : la distance entre les extrémités est au plus la longueur de la courbe.

## Pièges

* > ⚠️ **Pas d'égalité** $f(b)-f(a)=(b-a)f'(c)$ pour $f$ à valeurs vectorielles (contre-exemple $e^{it}$ sur $[0;2\pi]$). Seule l'inégalité est disponible. Le théorème de Rolle est faux aussi.
* La différentiabilité est demandée sur l'**ouvert** $]a;b[$, la continuité sur le **fermé** $[a;b]$ : ne pas exiger la dérivabilité aux bornes, ne pas oublier la continuité aux bornes.
* $g$ est à valeurs **réelles** et l'hypothèse porte sur $g'(t)$ lui-même (pas $|g'(t)|$) : elle force $g'\ge0$, donc $g$ croissante.
* Ne pas croire qu'une hypothèse « presque partout » suffit : l'escalier de Cantor la satisfait et contredit la conclusion. Le bon affaiblissement porte sur un ensemble **dénombrable** d'exceptions ([[ch05-accroissements-finis-denombrable]]).
* Le cas particulier $g(t)=kt$ donne [[ch05-accroissements-finis-borne]], dont découle le TAF sur un e.v.n. ([[ch05-accroissements-finis]]).
